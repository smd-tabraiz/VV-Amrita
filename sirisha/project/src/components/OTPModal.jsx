import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function OTPModal({ onVerified, onClose }) {
  const { t } = useLanguage();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    
    // Simple verification (in production, verify with backend)
    if (otpValue === '123456' || otpValue.length === 6) {
      onVerified();
    } else {
      setError('Invalid OTP. Please try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-8 max-w-md w-full"
      >
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🔐</div>
          <h2 className="text-white text-2xl font-bold mb-3">{t('verificationRequired')}</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {t('enterOTP')}
          </p>
        </div>

        <div className="flex gap-2 justify-center mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-2xl bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-400 text-center mb-4">{error}</p>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white/10 text-white py-3 rounded-xl hover:bg-white/20 transition-all"
          >
            {t('cancel')}
          </button>
          <button
            onClick={handleVerify}
            className="flex-1 bg-cyan-600 text-white py-3 rounded-xl hover:bg-cyan-700 transition-all"
          >
            {t('verify')}
          </button>
        </div>

        <p className="text-gray-400 text-xs text-center mt-4 leading-relaxed">
          {t('demoOTP')}
        </p>
      </motion.div>
    </div>
  );
}

export default OTPModal;
