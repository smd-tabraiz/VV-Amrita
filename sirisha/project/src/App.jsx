import { useState, useEffect, Suspense, lazy } from 'react';
import HeroBanner from './components/HeroBanner';
import EmergencyCards from './components/EmergencyCards';
const GuidancePanel = lazy(() => import('./components/GuidancePanel'));
import ChatbotPanel from './components/ChatbotPanel';
import OTPModal from './components/OTPModal';
import { initDatabase } from './utils/database';

function App() {
  const [selectedEmergency, setSelectedEmergency] = useState(null);
  const [showOTP, setShowOTP] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    initDatabase();

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEmergencyClick = (emergency) => {
    if (emergency.requiresOTP && !isVerified) {
      setShowOTP(true);
      setSelectedEmergency(emergency);
    } else {
      setSelectedEmergency(emergency);
    }
  };

  const handleOTPVerified = () => {
    setIsVerified(true);
    setShowOTP(false);
  };

  return (
    <div className="min-h-screen p-4 lg:p-8 pb-20">
      <div className="max-w-[1920px] mx-auto">
        <HeroBanner />

        <div className="mt-8 lg:mt-12">
          {!isMobile ? (
            // Desktop Layout - Three Column Grid
            <div className="grid grid-cols-12 gap-6">
              {/* Left: Emergency Cards */}
              <div className={`${selectedEmergency ? 'col-span-5' : 'col-span-9'} transition-all duration-300`}>
                <EmergencyCards
                  onEmergencyClick={handleEmergencyClick}
                  selectedId={selectedEmergency?.id}
                />
              </div>

              {/* Center: Guidance Panel */}
              {selectedEmergency && (
                <div className="col-span-4">
                  <Suspense fallback={<div className="glass-card rounded-3xl p-6 text-white text-center">Loading guidance...</div>}>
                    <GuidancePanel
                      emergency={selectedEmergency}
                      onClose={() => setSelectedEmergency(null)}
                    />
                  </Suspense>
                </div>
              )}

              {/* Right: Chatbot Panel */}
              <div className="col-span-3">
                <ChatbotPanel />
              </div>
            </div>
          ) : (
            // Mobile Layout - Stacked
            <div className="space-y-6">
              <EmergencyCards
                onEmergencyClick={handleEmergencyClick}
                selectedId={selectedEmergency?.id}
              />

              {selectedEmergency && (
                <Suspense fallback={<div className="glass-card rounded-3xl p-6 text-white text-center">Loading guidance...</div>}>
                  <GuidancePanel
                    emergency={selectedEmergency}
                    onClose={() => setSelectedEmergency(null)}
                  />
                </Suspense>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Chatbot Drawer - Mobile */}
      {isMobile && (
        <>
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform"
          >
            <span className="text-3xl">💬</span>
          </button>

          {showChatbot && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setShowChatbot(false)}>
              <div className="absolute inset-x-0 bottom-0 h-[75vh]" onClick={(e) => e.stopPropagation()}>
                <ChatbotPanel onClose={() => setShowChatbot(false)} isMobile />
              </div>
            </div>
          )}
        </>
      )}

      {/* OTP Modal */}
      {showOTP && (
        <OTPModal
          onVerified={handleOTPVerified}
          onClose={() => setShowOTP(false)}
        />
      )}
    </div>
  );
}

export default App;
