# Developer Guide
## Adding New Diseases to Jeevan Saathi

This guide explains how to extend the application with new medical conditions without modifying the homepage layout.

---

## 📌 Important Rules

1. **DO NOT** modify the 8 primary emergency cards in `emergencyCategories` array
2. **ONLY** add new diseases to the `additionalConditions` object
3. Follow the existing data structure for consistency
4. Test in both desktop and mobile layouts

---

## 🔧 Step-by-Step: Adding a New Disease

### Step 1: Add Disease to Medical Data

**File**: `src/data/medicalData.js`

Choose the appropriate category:
- `respiratory` - Breathing/airway conditions
- `injuries` - Trauma, wounds, physical injuries
- `environmental` - Infections, systemic diseases, environmental hazards

```javascript
export const additionalConditions = {
  respiratory: [
    // ... existing conditions
    {
      id: 'new_condition',           // Unique ID (lowercase, underscores)
      name: 'New Condition Name',    // Display name
      icon: '🏥',                     // Emoji icon
      description: 'Brief medical description of the condition.',
      firstAid: [
        'Step 1: First action to take',
        'Step 2: Second action to take',
        'Step 3: Third action to take'
      ],
      warnings: [
        'Warning sign 1',
        'Warning sign 2',
        'Warning sign 3'
      ],
      seekHelp: [
        'When to call emergency services',
        'Hospital referral criteria',
        'Danger signals requiring immediate care'
      ]
    }
  ],
  // ... other categories
};
```

### Step 2: Add Translations (Optional but Recommended)

**File**: `src/i18n/translations.js`

Add translations for the condition name in all supported languages:

```javascript
export const conditionTranslations = {
  en: {
    // ... existing translations
    new_condition: "New Condition Name"
  },
  hi: {
    // ... existing translations
    new_condition: "नई स्थिति का नाम"
  },
  te: {
    // ... existing translations
    new_condition: "కొత్త పరిస్థితి పేరు"
  },
  ta: {
    // ... existing translations
    new_condition: "புதிய நிலை பெயர்"
  },
  kn: {
    // ... existing translations
    new_condition: "ಹೊಸ ಸ್ಥಿತಿ ಹೆಸರು"
  }
};
```

### Step 3: Add Chatbot Responses (Optional)

**File**: `src/utils/medicalLLM.js`

Add pattern-based responses for common queries:

```javascript
export async function getMedicalResponse(query, conversationHistory = [], language = 'en') {
  // ... existing code
  
  if (lowerQuery.includes('new condition keyword')) {
    return translateResponse(
      'Response text for the new condition. Include first aid guidance and when to seek help.',
      language
    );
  }
  
  // ... rest of code
}
```

### Step 4: Add to IndexedDB Dataset (Optional)

**File**: `src/utils/database.js`

Add preloaded responses for offline access:

```javascript
async function preloadMedicalDataset(db) {
  // ... existing code
  
  const medicalDataset = [
    // ... existing entries
    {
      keyword: 'new condition',
      response: 'Detailed response about the new condition including symptoms, first aid, and when to seek help.'
    }
  ];
  
  // ... rest of code
}
```

---

## 🎨 Icon Selection Guide

Choose appropriate emoji icons that are:
- **Recognizable** - Clearly represents the condition
- **Universal** - Works across cultures
- **Professional** - Medical or health-related

### Recommended Icon Categories

| Category | Example Icons |
|----------|--------------|
| Respiratory | 🫁 😮 🤧 🤒 |
| Injuries | 🔥 🦴 🩸 🦠 🧠 |
| Infections | 🦟 🚰 🪱 🦠 |
| Environmental | 🌡️ 🥶 ☠️ |
| Systemic | 🩺 🤰 🩸 🍲 |

---

## 📋 Data Structure Reference

### Disease Object Schema

```typescript
{
  id: string;              // Unique identifier (required)
  name: string;            // Display name (required)
  icon: string;            // Emoji icon (required)
  description: string;     // Medical overview (required)
  firstAid: string[];      // Step-by-step instructions (required)
  warnings: string[];      // Warning signs (required)
  seekHelp: string[];      // When to seek emergency help (required)
  requiresOTP?: boolean;   // OTP protection (optional, default: false)
}
```

### Guidance Page Sections

Each disease guidance page displays:

1. **Overview Section** (Blue background)
   - Icon: 📋
   - Content: `description` field

2. **First Aid Steps** (Blue background)
   - Icon: 🚑
   - Content: Numbered list from `firstAid` array

3. **Warning Signs** (Red background)
   - Icon: ⚠️
   - Content: Bullet list from `warnings` array

4. **Seek Emergency Help** (Yellow background)
   - Icon: 🏥
   - Content: Bullet list from `seekHelp` array

---

## 🧪 Testing Checklist

After adding a new disease:

- [ ] Disease appears in "More Health Conditions" section
- [ ] Clicking disease card opens guidance panel
- [ ] All sections display correctly (Overview, First Aid, Warnings, Seek Help)
- [ ] Icon displays properly
- [ ] Translations work in all languages
- [ ] Mobile layout displays correctly
- [ ] Desktop layout displays correctly
- [ ] Chatbot can answer questions about the condition (if added)
- [ ] No console errors
- [ ] Glassmorphism styling applied correctly

---

## 🔍 Example: Adding "Food Poisoning"

### 1. Add to medicalData.js

```javascript
environmental: [
  // ... existing conditions
  {
    id: 'food_poisoning',
    name: 'Food Poisoning',
    icon: '🤢',
    description: 'Illness caused by consuming contaminated food or beverages.',
    firstAid: [
      'Immediate response: Stop eating and drinking',
      'Immediate response: Stay hydrated with small sips of water',
      'Immediate response: Rest and avoid solid foods initially',
      'Prevention advice: Wash hands before eating'
    ],
    warnings: [
      'Symptom recognition: Severe vomiting or diarrhea',
      'Symptom recognition: Blood in stool or vomit',
      'High fever above 101.5°F',
      'Signs of dehydration'
    ],
    seekHelp: [
      'Danger signal: Unable to keep liquids down for 24 hours',
      'Danger signal: Severe abdominal pain',
      'Emergency transport recommendation: Seek medical care if symptoms persist beyond 3 days'
    ]
  }
]
```

### 2. Add translations

```javascript
export const conditionTranslations = {
  en: {
    food_poisoning: "Food Poisoning"
  },
  hi: {
    food_poisoning: "खाद्य विषाक्तता"
  },
  te: {
    food_poisoning: "ఆహార విషప్రయోగం"
  },
  ta: {
    food_poisoning: "உணவு விஷம்"
  },
  kn: {
    food_poisoning: "ಆಹಾರ ವಿಷ"
  }
};
```

### 3. Add chatbot response

```javascript
if (lowerQuery.includes('food poison') || lowerQuery.includes('stomach')) {
  return translateResponse(
    'For food poisoning: Stay hydrated with small sips of water or oral rehydration solution. Rest and avoid solid foods initially. Seek medical help if symptoms are severe, persist beyond 3 days, or include blood in vomit/stool.',
    language
  );
}
```

### 4. Add to database

```javascript
{
  keyword: 'food poisoning',
  response: 'Food poisoning causes nausea, vomiting, and diarrhea. Stay hydrated, rest, and seek medical care if symptoms are severe or persistent.'
}
```

---

## 🚫 Common Mistakes to Avoid

1. **Don't modify `emergencyCategories` array** - Homepage must remain fixed
2. **Don't forget translations** - Breaks multi-language support
3. **Don't use complex icons** - Stick to simple emojis
4. **Don't skip warnings section** - Critical for user safety
5. **Don't provide diagnostic advice** - Only first aid guidance
6. **Don't forget mobile testing** - Layout differs significantly

---

## 📚 Additional Resources

### File Locations
- Medical data: `src/data/medicalData.js`
- Translations: `src/i18n/translations.js`
- Chatbot logic: `src/utils/medicalLLM.js`
- Database: `src/utils/database.js`

### Component Files
- Emergency cards: `src/components/EmergencyCards.jsx`
- Guidance panel: `src/components/GuidancePanel.jsx`
- Chatbot: `src/components/ChatbotPanel.jsx`

### Styling
- Glassmorphism: `src/index.css`
- Tailwind config: `tailwind.config.js`

---

## 🆘 Need Help?

If you encounter issues:

1. Check browser console for errors
2. Verify data structure matches schema
3. Test in both desktop and mobile views
4. Ensure all required fields are present
5. Check translation keys match disease IDs

---

## 📝 Best Practices

1. **Medical Accuracy**: Verify information with reliable medical sources
2. **Safety First**: Always include emergency escalation guidance
3. **Clear Language**: Use simple, actionable instructions
4. **Consistent Format**: Follow existing patterns for uniformity
5. **Test Thoroughly**: Check all languages and layouts
6. **Document Changes**: Update this guide if adding new categories

---

**Last Updated**: February 25, 2026  
**Maintainer**: Development Team
