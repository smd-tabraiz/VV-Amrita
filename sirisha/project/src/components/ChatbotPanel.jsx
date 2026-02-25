import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getMedicalResponse } from '../utils/medicalLLM';
import { useLanguage } from '../context/LanguageContext';

function ChatbotPanel({ onClose, isMobile }) {
  const { t, language } = useLanguage();

  const initialMessages = {
    en: 'Hello! I\'m your offline medical assistant. How can I help you today?',
    hi: 'नमस्ते! मैं आपका ऑफ़लाइन चिकित्सा सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
    te: 'హలో! నేను మీ ఆఫ్‌లైన్ వైద్య సహాయకుడిని. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?',
    ta: 'வணக்கம்! நான் உங்கள் ஆஃப்லைன் மருத்துவ உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    kn: 'ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಆಫ್‌ಲೈನ್ ವೈದ್ಯಕೀಯ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?'
  };

  const [messages, setMessages] = useState([
    { role: 'assistant', content: initialMessages[language] || initialMessages.en }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Update initial message when language changes
  useEffect(() => {
    setMessages([{ role: 'assistant', content: initialMessages[language] }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  // Initialize Speech Recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      // Set language based on selected language
      const langCodes = { en: 'en-US', hi: 'hi-IN', te: 'te-IN', ta: 'ta-IN', kn: 'kn-IN' };
      recognitionRef.current.lang = langCodes[language] || 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language]);

  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      const langCodes = { en: 'en-US', hi: 'hi-IN', te: 'te-IN', ta: 'ta-IN', kn: 'kn-IN' };
      recognitionRef.current.lang = langCodes[language] || 'en-US';
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleTextToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      // Stop any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      const langCodes = { en: 'en-US', hi: 'hi-IN', te: 'te-IN', ta: 'ta-IN', kn: 'kn-IN' };
      utterance.lang = langCodes[language] || 'en-US';
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getMedicalResponse(input, messages, language);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      const errorMessages = {
        en: 'I apologize, but I encountered an error. Please try rephrasing your question.',
        hi: 'मुझे खेद है, लेकिन मुझे एक त्रुटि का सामना करना पड़ा। कृपया अपना प्रश्न दोबारा लिखें।',
        te: 'నన్ను క్షమించండి, కానీ నేను ఒక లోపాన్ని ఎదుర్కొన్నాను. దయచేసి మీ ప్రశ్నను మళ్లీ రాయండి.',
        ta: 'மன்னிக்கவும், ஆனால் நான் ஒரு பிழையை எதிர்கொண்டேன். தயவுசெய்து உங்கள் கேள்வியை மீண்டும் எழுதவும்.',
        kn: 'ಕ್ಷಮಿಸಿ, ಆದರೆ ನಾನು ದೋಷವನ್ನು ಎದುರಿಸಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮರುಬರೆಯಿರಿ.'
      };
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: errorMessages[language] || errorMessages.en
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 100 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      className={`glass-card flex flex-col ${isMobile ? 'h-full rounded-t-3xl' : 'sticky top-8 h-[calc(100vh-6rem)] rounded-3xl'
        }`}
    >
      {/* Header */}
      <div className="p-5 border-b border-white/20 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{t('medicalAssistant')}</h3>
            <p className="text-gray-400 text-xs">{t('offlineSupport')}</p>
          </div>
        </div>
        {isMobile && (
          <button onClick={onClose} className="text-white hover:text-red-400 text-3xl transition-colors">×</button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex flex-col gap-2 max-w-[85%]">
                <div
                  className={`p-4 rounded-2xl shadow-lg ${msg.role === 'user'
                      ? 'bg-gradient-to-br from-cyan-600 to-blue-700 text-white'
                      : 'bg-white/10 text-gray-200 border border-white/20'
                    }`}
                >
                  <p className="leading-relaxed text-sm">{msg.content}</p>
                </div>
                {msg.role === 'assistant' && (
                  <button
                    onClick={() => handleTextToSpeech(msg.content)}
                    className="self-start text-gray-400 hover:text-cyan-400 text-xs flex items-center gap-1 transition-colors"
                  >
                    <span>🔊</span> {isSpeaking ? 'Speaking...' : 'Listen'}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-5 border-t border-white/20 flex-shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={t('askSymptoms')}
            className="flex-1 bg-white/10 text-white placeholder-gray-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/10 text-sm min-w-0"
          />
          <button
            onClick={handleVoiceInput}
            disabled={isLoading}
            className={`${isListening ? 'bg-red-600 animate-pulse' : 'bg-white/10 hover:bg-white/20'
              } text-white p-3 rounded-xl disabled:opacity-50 transition-all flex-shrink-0`}
            title="Voice Input"
          >
            <span className="text-xl">{isListening ? '🎤' : '🎙️'}</span>
          </button>
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold text-sm whitespace-nowrap flex-shrink-0"
          >
            {t('send')}
          </button>
        </div>
        {isSpeaking && (
          <button
            onClick={stopSpeaking}
            className="mt-2 w-full bg-red-600 text-white py-2 rounded-lg text-xs hover:bg-red-700 transition-all"
          >
            Stop Speaking
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default ChatbotPanel;
