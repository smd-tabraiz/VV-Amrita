import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getTranslatedMedicalContent } from '../i18n/allMedicalTranslations';

function GuidancePanel({ emergency, onClose }) {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card rounded-3xl p-6 sticky top-8 max-h-[calc(100vh-6rem)] flex flex-col"
    >
      <div className="flex justify-between items-start mb-6 pb-4 border-b border-white/20 flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-5xl">{emergency.icon}</span>
          <h2 className="text-white text-2xl font-bold">{emergency.name}</h2>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-red-400 text-3xl leading-none transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-6 text-white overflow-y-auto flex-1 pr-2 custom-scrollbar">
        {/* Description */}
        {emergency.description && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> {t('overview')}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {getTranslatedMedicalContent(emergency.id, 'description', undefined, language) || emergency.description}
            </p>
          </div>
        )}

        {/* First Aid Steps */}
        {emergency.firstAid && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>🚑</span> {t('firstAidSteps')}
            </h3>
            <ol className="space-y-3">
              {emergency.firstAid.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-cyan-400 font-bold text-lg flex-shrink-0 w-6">{index + 1}.</span>
                  <span className="text-gray-200 leading-relaxed">
                    {getTranslatedMedicalContent(emergency.id, 'firstAid', index, language) || step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Warning Signs */}
        {emergency.warnings && (
          <div className="bg-red-500/20 border-2 border-red-400/50 rounded-xl p-4">
            <h3 className="text-red-300 font-semibold mb-3 flex items-center gap-2">
              <span>⚠️</span> {t('warningSign')}
            </h3>
            <ul className="space-y-2">
              {emergency.warnings.map((warning, index) => (
                <li key={index} className="text-gray-200 flex items-start gap-2">
                  <span className="text-red-400 flex-shrink-0">•</span>
                  <span>{getTranslatedMedicalContent(emergency.id, 'warnings', index, language) || warning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* When to Seek Help */}
        {emergency.seekHelp && (
          <div className="bg-yellow-500/20 border-2 border-yellow-400/50 rounded-xl p-4">
            <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
              <span>🏥</span> {t('seekHelp')}
            </h3>
            <ul className="space-y-2">
              {emergency.seekHelp.map((item, index) => (
                <li key={index} className="text-gray-200 flex items-start gap-2">
                  <span className="text-yellow-400 flex-shrink-0">•</span>
                  <span>{getTranslatedMedicalContent(emergency.id, 'seekHelp', index, language) || item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Snake Bite First Aid Image - Only for snakebite */}
        {emergency.id === 'snakebite' && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> Visual Guide
            </h3>
            <img 
              src="/images/snakebite.png" 
              alt="First Aid for Snake Bite - Step by Step Visual Guide"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Fits/Seizure First Aid Image - Only for seizure */}
        {emergency.id === 'seizure' && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> Visual Guide
            </h3>
            <img 
              src="/images/Fits.png" 
              alt="First Aid for Fits/Seizure - Step by Step Visual Guide"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Unconsciousness First Aid Image - Only for unconscious */}
        {emergency.id === 'unconscious' && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> Visual Guide
            </h3>
            <img 
              src="/images/unconsious.png" 
              alt="First Aid for Unconsciousness - Step by Step Visual Guide"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Dog Bite First Aid Image - Only for dogbite */}
        {emergency.id === 'dogbite' && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> Visual Guide
            </h3>
            <img 
              src="/images/dogbite.png" 
              alt="First Aid for Dog Bite - Step by Step Visual Guide"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Heart Pain / Cardiac First Aid Image - Only for heartpain */}
        {emergency.id === 'heartpain' && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> Visual Guide
            </h3>
            <img 
              src="/images/heart.png" 
              alt="First Aid for Heart Pain / Cardiac Emergency - Step by Step Visual Guide"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Waterborne Disease First Aid Image - Only for waterborne */}
        {emergency.id === 'waterborne' && (
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span>📋</span> Visual Guide
            </h3>
            <img 
              src="/images/heart.png" 
              alt="First Aid for Waterborne Disease - Step by Step Visual Guide"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default GuidancePanel;
