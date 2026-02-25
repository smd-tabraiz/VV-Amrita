# Jeevan Saathi - Emergency Healthcare Assistant PWA

A hybrid offline-first emergency healthcare web application providing interactive medical guidance, symptom understanding, and comprehensive healthcare conversation support with glassmorphism UI design.

## 🎯 Core Features

- **8 Primary Emergency Categories**: Fixed homepage cards for critical emergency guidance
- **24+ Additional Health Conditions**: Organized in expandable "More Health Conditions" section
- **Glassmorphism UI**: Professional frosted glass design with backdrop blur effects
- **Offline-First Architecture**: Works completely offline after installation
- **Lightweight Medical Dataset**: ~40-50 MB optimized IndexedDB storage
- **Interactive Chatbot**: Context-aware medical assistant with voice input/output
- **Multi-Language Support**: English, Hindi, Telugu, Tamil, Kannada
- **OTP Verification**: Security layer for high-risk medical guidance modules
- **PWA Support**: Installable as native app on mobile and desktop
- **Responsive Design**: Three-zone desktop layout, mobile drawer chatbot

## 🚨 8 Primary Emergency Categories (Fixed Homepage)

1. **Fits / Seizure** ⚡ - Seizure guidance and management
2. **Unconsciousness** 😵 - Emergency response steps (OTP Protected)
3. **Accidents / Trauma** 🚑 - Injury management protocols
4. **Snake Bite** 🐍 - Venomous bite protocol
5. **Dog Bite** 🐕 - Animal bite care and rabies prevention
6. **Paralysis** 🦽 - Stroke & nerve emergency (OTP Protected)
7. **Heart Pain / Cardiac** ❤️ - Chest pain protocol (OTP Protected)
8. **Waterborne Disease** 💧 - Dehydration & infection management

## 🏥 Additional Health Conditions (Expandable Section)

### 🫁 Respiratory Emergency Group (4 Conditions)
- **Asthma Attack** - Airway management and breathing monitoring
- **Choking** - Heimlich maneuver and airway clearance
- **Pneumonia** - Infection management and breathing support
- **Tuberculosis** - TB emergency care and isolation protocols

### 🔥 Injury Emergency Group (6 Conditions)
- **Burns** - Thermal injury first aid and wound care
- **Fractures** - Bone injury immobilization guidance
- **Severe Bleeding** - Hemorrhage control techniques
- **Tetanus** - Wound infection prevention
- **Rabies Risk** - Dog bite complication handling
- **Suicide Risk** - Mental health crisis intervention

### 🌍 Environmental / Infection / Systemic Disease Group (14 Conditions)
- **Malaria** - Mosquito-borne disease management
- **Dengue** - Viral fever emergency care
- **Cholera** - Severe dehydration management
- **Severe Diarrhea / Gastroenteritis** - GI emergency protocols
- **Skin Infections** - Bacterial/fungal infection care
- **Parasitic Worm Infections** - Deworming guidance
- **Anemia** - Blood disorder emergency signs
- **Malnutrition** - Nutritional crisis management
- **Chicken Pox** - Viral infection isolation care
- **Heat Stroke** - Hyperthermia emergency response
- **Hypothermia** - Cold exposure management
- **Poisoning** - Toxic substance emergency protocols
- **Kidney Disease Complications** - Renal emergency care
- **Pregnancy Complications** - Maternal emergency guidance

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration

Create a `.env` file based on `.env.example`:

```env
VITE_SPEECH_API_KEY=your_speech_api_key_here
VITE_SPEECH_REGION=your_region_here
VITE_OTP_SERVICE_URL=your_otp_service_url
VITE_OTP_API_KEY=your_otp_api_key
VITE_ENABLE_VOICE_INPUT=false
```

## 🏗️ Architecture

### Frontend Stack
- **React 18** with Vite for fast development
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **IndexedDB (idb)** for offline storage
- **TensorFlow.js** ready for future ML integration

### Offline Capabilities
- **Service Worker** with Workbox for asset caching
- **IndexedDB** medical dataset (keyword-based retrieval)
- **Precomputed response mapping** for instant answers
- **Browser-based inference** ready architecture

### 🎨 Glassmorphism Design System
- **Frosted glass cards** with backdrop blur
- **Rounded corners** (~24px radius)
- **Soft white borders** with transparency
- **Minimal shadow depth** for professional look
- **Theme support** (Dark/Light mode)

### 📐 Layout Architecture

#### Desktop Layout (3-Zone Grid)
1. **Left Zone**: Emergency cards (5 or 9 columns based on selection)
2. **Center Zone**: Guidance panel (4 columns when active)
3. **Right Zone**: Fixed chatbot sidebar (3 columns)

#### Mobile Layout (Stacked)
1. **Emergency cards** - Full width stacked
2. **Guidance panel** - Full width when selected
3. **Chatbot drawer** - Bottom expandable panel with floating button

## 🤖 Chatbot Features

### Capabilities
- **Offline operation** after initial load
- **Voice input** using Web Speech API
- **Text-to-speech** output for accessibility
- **Multi-language** conversation support
- **Context memory** within session
- **Pattern-based responses** for common queries

### Medical Safety Guardrails
- **No diagnostic claims** - guidance only
- **Emergency escalation** prompts
- **Professional referral** recommendations
- **Clear limitations** communicated
- **Safety-first** response patterns

### Supported Query Types
- Symptom explanation
- First aid procedures
- Emergency recognition
- When to seek help
- Basic health information

## 🔒 Security Features

### OTP Verification System
- **High-risk modules** protected (Unconsciousness, Paralysis, Cardiac)
- **6-digit OTP** verification
- **Demo mode** accepts any 6-digit code
- **Session persistence** after verification
- **Modal-based** user-friendly interface

## ⚡ Performance Optimization

- **Lazy loading** for guidance panels (React.lazy)
- **Code splitting** for optimal bundle size
- **Service Worker** caching strategy
- **IndexedDB** for instant offline access
- **Compressed medical dataset** (~40-50 MB)
- **Fast startup time** (<2s on mobile)
- **Minimal re-renders** with React optimization

## 🌐 Multi-Language Support

### Supported Languages
- **English** (en) - Default
- **Hindi** (hi) - हिंदी
- **Telugu** (te) - తెలుగు
- **Tamil** (ta) - தமிழ்
- **Kannada** (kn) - ಕನ್ನಡ

### Translation Coverage
- UI labels and navigation
- Emergency category names
- Additional condition names
- Chatbot responses
- Medical guidance content (expandable)

## 📱 PWA Features

- **Installable** on mobile and desktop
- **Offline-first** service worker
- **App manifest** with icons
- **Standalone mode** display
- **Background sync** ready
- **Push notifications** ready

## 🔮 Future Enhancements

- **TensorFlow.js model** integration for advanced inference
- **Online dataset sync** for latest medical guidelines
- **Advanced triage** decision tree engine
- **Expanded language** support (10+ languages)
- **Voice-first** interaction mode
- **Backend OTP** authentication service
- **Medical professional** verification system
- **Community contributions** for regional diseases

## Disclaimer

This application provides first aid guidance and general health information only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions regarding medical conditions.

## License

MIT
