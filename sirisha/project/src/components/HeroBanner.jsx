import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

function HeroBanner() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'kn', label: 'ಕನ್ನಡ' }
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Floating background glass panels */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-4 left-8 w-32 h-32 glass-card rounded-3xl opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-8 right-12 w-40 h-40 glass-card rounded-3xl opacity-15"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Main Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-hero rounded-3xl p-8 lg:p-12 relative overflow-hidden"
      >
        {/* Light particles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-8" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-2">
              {t('tagline')}
            </h1>
            <p className="text-sm text-gray-400 mb-4">WITH</p>
            <div className="inline-block glass-card px-6 py-3 rounded-full">
              <span className="text-xl font-semibold text-cyan-300 tracking-wider">
                {t('appName')}
              </span>
            </div>
            <p className="mt-6 text-gray-300 text-lg">
              {t('subtitle')}
            </p>
          </div>

          {/* Controls & Icon */}
          <div className="flex flex-col items-center gap-4">
            {/* Circular Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-30" />
                <span className="text-5xl relative z-10">⚕️</span>
              </div>
            </motion.div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>

            {/* Language Selector */}
            <div className="flex flex-wrap gap-2 justify-center max-w-xs">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    language === lang.code
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                  title={lang.label}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroBanner;
