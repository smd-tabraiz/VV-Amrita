import { getCachedResponse } from './database';

// Lightweight medical response engine
// In production, this would use TensorFlow.js with a compressed medical model
export async function getMedicalResponse(query, conversationHistory = [], language = 'en') {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const lowerQuery = query.toLowerCase();
  
  // Try to find cached response first
  const keywords = extractKeywords(lowerQuery);
  for (const keyword of keywords) {
    const cached = await getCachedResponse(keyword);
    if (cached) {
      return translateResponse(cached.response, language);
    }
  }
  
  // Pattern-based responses for common queries
  if (lowerQuery.includes('emergency') || lowerQuery.includes('urgent')) {
    return translateResponse('For life-threatening emergencies, call emergency services immediately (911 or local emergency number). I can provide first aid guidance while you wait for help.', language);
  }
  
  if (lowerQuery.includes('pain')) {
    return translateResponse('Pain location and severity matter. For severe or sudden pain, especially chest pain, seek immediate medical attention. For minor pain, rest, ice/heat therapy, and over-the-counter pain relief may help.', language);
  }
  
  if (lowerQuery.includes('bleed')) {
    return translateResponse('For bleeding: Apply direct pressure with clean cloth, elevate the injured area above heart level, and maintain pressure for 10-15 minutes. Seek medical help for severe or uncontrolled bleeding.', language);
  }
  
  if (lowerQuery.includes('burn')) {
    return translateResponse('For burns: Cool with running water for 20 minutes, remove jewelry before swelling, cover with clean dressing. Do not apply ice. Seek medical care for large, deep, or facial burns.', language);
  }
  
  if (lowerQuery.includes('fracture') || lowerQuery.includes('broken')) {
    return translateResponse('For suspected fractures: Immobilize the area, apply ice to reduce swelling, do not try to realign the bone, and seek medical attention immediately.', language);
  }
  
  if (lowerQuery.includes('cpr') || lowerQuery.includes('unconscious')) {
    return translateResponse('For unconscious person: Check responsiveness, call emergency services, check breathing. If not breathing and you\'re trained, begin CPR: 30 chest compressions followed by 2 rescue breaths. Continue until help arrives.', language);
  }
  
  if (lowerQuery.includes('seizure') || lowerQuery.includes('fit')) {
    return translateResponse('During seizure: Clear area of objects, place something soft under head, turn person on side, time the seizure. Do NOT put anything in mouth. Call emergency if seizure lasts over 5 minutes.', language);
  }
  
  if (lowerQuery.includes('stroke')) {
    return translateResponse('FAST test for stroke: Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Stroke is a medical emergency requiring immediate hospital care.', language);
  }
  
  if (lowerQuery.includes('heart attack') || lowerQuery.includes('cardiac')) {
    return translateResponse('Heart attack signs: Chest pain/pressure, pain radiating to arm/jaw, shortness of breath, sweating. Call emergency immediately, help person sit comfortably, give aspirin if not allergic.', language);
  }
  
  if (lowerQuery.includes('choking')) {
    return translateResponse('For choking: Encourage coughing if possible. If unable to cough/breathe, perform 5 back blows between shoulder blades, then 5 abdominal thrusts (Heimlich maneuver). Call emergency if obstruction persists.', language);
  }
  
  if (lowerQuery.includes('snake') || lowerQuery.includes('bite')) {
    return translateResponse('For snake bite: Keep person calm and still, remove jewelry near bite, position bite below heart, clean gently, immobilize limb, and get to hospital immediately. Do not cut wound or apply tourniquet.', language);
  }
  
  if (lowerQuery.includes('allerg')) {
    return translateResponse('Mild allergies cause itching/rash - use antihistamines. Severe reactions (anaphylaxis) with breathing difficulty require immediate epinephrine injection and emergency care. Call 911 for severe reactions.', language);
  }
  
  if (lowerQuery.includes('poison')) {
    return translateResponse('For poisoning: Call poison control immediately, do not induce vomiting unless instructed, keep substance container for identification, monitor breathing and consciousness.', language);
  }
  
  // Medical safety guardrail
  if (lowerQuery.includes('diagnose') || lowerQuery.includes('diagnosis')) {
    return translateResponse('I cannot provide medical diagnoses. I can only offer first aid guidance and general health information. Please consult a healthcare professional for proper diagnosis and treatment.', language);
  }
  
  // Default response with context awareness
  return translateResponse('I\'m here to help with emergency first aid guidance and symptom information. Could you please be more specific about your concern? For life-threatening emergencies, always call emergency services first.', language);
}

function translateResponse(text, language) {
  // Simple translation mapping for common medical phrases
  const translations = {
    hi: {
      'For life-threatening emergencies, call emergency services immediately (911 or local emergency number). I can provide first aid guidance while you wait for help.': 'जीवन-घातक आपात स्थिति के लिए, तुरंत आपातकालीन सेवाओं को कॉल करें (911 या स्थानीय आपातकालीन नंबर)। मैं आपकी मदद का इंतजार करते समय प्राथमिक चिकित्सा मार्गदर्शन प्रदान कर सकता हूं।',
      'I\'m here to help with emergency first aid guidance and symptom information. Could you please be more specific about your concern? For life-threatening emergencies, always call emergency services first.': 'मैं आपातकालीन प्राथमिक चिकित्सा मार्गदर्शन और लक्षण जानकारी में मदद के लिए यहां हूं। क्या आप कृपया अपनी चिंता के बारे में अधिक विशिष्ट हो सकते हैं? जीवन-घातक आपात स्थिति के लिए, हमेशा पहले आपातकालीन सेवाओं को कॉल करें।',
      'I cannot provide medical diagnoses. I can only offer first aid guidance and general health information. Please consult a healthcare professional for proper diagnosis and treatment.': 'मैं चिकित्सा निदान प्रदान नहीं कर सकता। मैं केवल प्राथमिक चिकित्सा मार्गदर्शन और सामान्य स्वास्थ्य जानकारी प्रदान कर सकता हूं। उचित निदान और उपचार के लिए कृपया एक स्वास्थ्य पेशेवर से परामर्श करें।'
    },
    te: {
      'For life-threatening emergencies, call emergency services immediately (911 or local emergency number). I can provide first aid guidance while you wait for help.': 'ప్రాణాంతక అత్యవసర పరిస్థితుల కోసం, వెంటనే అత్యవసర సేవలకు కాల్ చేయండి (911 లేదా స్థానిక అత్యవసర నంబర్). మీరు సహాయం కోసం వేచి ఉన్నప్పుడు నేను ప్రథమ చికిత్స మార్గదర్శకత్వం అందించగలను.',
      'I\'m here to help with emergency first aid guidance and symptom information. Could you please be more specific about your concern? For life-threatening emergencies, always call emergency services first.': 'అత్యవసర ప్రథమ చికిత్స మార్గదర్శకత్వం మరియు లక్షణ సమాచారంతో సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. దయచేసి మీ ఆందోళన గురించి మరింత నిర్దిష్టంగా చెప్పగలరా? ప్రాణాంతక అత్యవసర పరిస్థితుల కోసం, ఎల్లప్పుడూ మొదట అత్యవసర సేవలకు కాల్ చేయండి.',
      'I cannot provide medical diagnoses. I can only offer first aid guidance and general health information. Please consult a healthcare professional for proper diagnosis and treatment.': 'నేను వైద్య నిర్ధారణలు అందించలేను. నేను ప్రథమ చికిత్స మార్గదర్శకత్వం మరియు సాధారణ ఆరోగ్య సమాచారం మాత్రమే అందించగలను. సరైన నిర్ధారణ మరియు చికిత్స కోసం దయచేసి ఆరోగ్య నిపుణుడిని సంప్రదించండి.'
    }
  };

  if (language === 'en') return text;
  
  return translations[language]?.[text] || text;
}

function extractKeywords(text) {
  const medicalKeywords = [
    'fever', 'headache', 'cough', 'chest pain', 'breathing', 
    'allergic', 'dizziness', 'nausea', 'wound', 'dehydration',
    'pain', 'bleeding', 'burn', 'fracture', 'seizure', 'stroke'
  ];
  
  return medicalKeywords.filter(keyword => text.includes(keyword));
}

// Voice input integration placeholder
export function initVoiceInput(onResult) {
  if (!('webkitSpeechRecognition' in window)) {
    console.warn('Speech recognition not supported');
    return null;
  }
  
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };
  
  return recognition;
}
