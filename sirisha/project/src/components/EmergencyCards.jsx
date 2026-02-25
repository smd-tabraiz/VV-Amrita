import { motion } from 'framer-motion';
import { useState } from 'react';
import { emergencyCategories, additionalConditions } from '../data/medicalData';
import { useLanguage } from '../context/LanguageContext';
import { emergencyTranslations, conditionTranslations } from '../i18n/translations';

function EmergencyCards({ onEmergencyClick, selectedId }) {
  const [showMore, setShowMore] = useState(false);
  const { language, t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Primary Emergency Cards */}
      <div>
        <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="text-3xl">🚨</span>
          {t('emergencyCategories')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
          {emergencyCategories.map((emergency, index) => {
            const translated = emergencyTranslations[language][emergency.id] || emergency;
            return (
              <motion.div
                key={emergency.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onEmergencyClick(emergency)}
                className={`glass-card rounded-3xl p-6 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-2xl ${selectedId === emergency.id ? 'ring-2 ring-cyan-400 bg-white/20' : ''
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{emergency.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {translated.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{translated.hint}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* More Conditions Button */}
      <div className="text-center pt-4">
        <button
          onClick={() => setShowMore(!showMore)}
          className="glass-card px-10 py-4 rounded-full text-white font-semibold hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
        >
          {showMore ? t('backToEmergencies') : t('moreConditions')}
        </button>
      </div>

      {/* Additional Conditions */}
      {showMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 pt-4"
        >
          {Object.entries(additionalConditions).map(([category, conditions]) => (
            <div key={category}>
              <h3 className="text-white text-xl font-bold mb-5 capitalize flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {t(category)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {conditions.map((condition) => {
                  const translatedName = conditionTranslations[language][condition.id] || condition.name;
                  return (
                    <motion.div
                      key={condition.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => onEmergencyClick(condition)}
                      className={`glass-card rounded-3xl p-5 cursor-pointer hover:scale-[1.02] transition-all ${selectedId === condition.id ? 'ring-2 ring-cyan-400 bg-white/20' : ''
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{condition.icon}</div>
                        <h4 className="text-white font-semibold text-base">{translatedName}</h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default EmergencyCards;
