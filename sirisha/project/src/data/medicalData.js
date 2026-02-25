export const emergencyCategories = [
  {
    id: 'seizure',
    name: 'Fits / Seizure',
    icon: '⚡',
    hint: 'Tap for seizure guidance',
    requiresOTP: false,
    description: 'A seizure is sudden, uncontrolled electrical disturbance in the brain.',
    firstAid: [
      'Stay calm and stay with the person',
      'Clear the area of hard or sharp objects',
      'Place something soft under their head',
      'Turn them on their side to keep airway clear',
      'Time the seizure - if over 5 minutes, call emergency',
      'Do NOT put anything in their mouth',
      'Stay until they are fully conscious'
    ],
    warnings: [
      'Seizure lasts more than 5 minutes',
      'Person has multiple seizures',
      'Difficulty breathing after seizure',
      'First-time seizure',
      'Injury during seizure'
    ],
    seekHelp: [
      'Seizure continues beyond 5 minutes',
      'Person doesn\'t regain consciousness',
      'Another seizure follows immediately',
      'Pregnant or has diabetes',
      'Seizure occurred in water'
    ]
  },
  {
    id: 'unconscious',
    name: 'Unconsciousness',
    icon: '😵',
    hint: 'Emergency response steps',
    requiresOTP: true,
    description: 'Loss of consciousness requires immediate assessment and care.',
    firstAid: [
      'Check for danger before approaching',
      'Check responsiveness - tap shoulders and shout',
      'Call emergency services immediately',
      'Check breathing - look, listen, feel for 10 seconds',
      'If breathing: place in recovery position',
      'If not breathing: begin CPR if trained',
      'Monitor breathing until help arrives'
    ],
    warnings: [
      'No breathing or gasping',
      'No pulse detected',
      'Blue lips or face',
      'Severe bleeding',
      'Suspected spinal injury'
    ],
    seekHelp: [
      'Person is unconscious',
      'Not breathing normally',
      'No signs of circulation',
      'After head injury',
      'Suspected poisoning or overdose'
    ]
  },
  {
    id: 'trauma',
    name: 'Accidents / Trauma',
    icon: '🚑',
    hint: 'Injury management',
    requiresOTP: false,
    description: 'Physical injuries from accidents require proper assessment and care.',
    firstAid: [
      'Ensure scene safety first',
      'Call emergency services for serious injuries',
      'Control bleeding with direct pressure',
      'Immobilize suspected fractures',
      'Do not move person if spinal injury suspected',
      'Cover wounds with clean cloth',
      'Monitor for shock symptoms'
    ],
    warnings: [
      'Heavy bleeding that won\'t stop',
      'Suspected broken bones',
      'Head or neck injury',
      'Difficulty breathing',
      'Loss of consciousness'
    ],
    seekHelp: [
      'Severe bleeding',
      'Suspected internal injuries',
      'Bone protruding through skin',
      'Severe pain',
      'Signs of shock'
    ]
  },
  {
    id: 'snakebite',
    name: 'Snake Bite',
    icon: '🐍',
    hint: 'Venomous bite protocol',
    requiresOTP: false,
    description: 'Snake bites can be venomous and require immediate medical attention.',
    firstAid: [
      'Move away from the snake safely',
      'Keep the person calm and still',
      'Remove jewelry and tight clothing near bite',
      'Position bite below heart level if possible',
      'Clean wound gently with water',
      'Cover with clean, dry dressing',
      'Immobilize the affected limb',
      'Get to hospital immediately'
    ],
    warnings: [
      'Severe pain at bite site',
      'Swelling spreading rapidly',
      'Difficulty breathing',
      'Blurred vision',
      'Nausea or vomiting'
    ],
    seekHelp: [
      'Any snake bite should be evaluated',
      'Symptoms worsen',
      'Swelling increases',
      'Difficulty breathing',
      'Altered consciousness'
    ]
  },
  {
    id: 'dogbite',
    name: 'Dog Bite',
    icon: '🐕',
    hint: 'Animal bite care',
    requiresOTP: false,
    description: 'Dog bites can cause infection and require proper wound care.',
    firstAid: [
      'Wash wound thoroughly with soap and water for 5 minutes',
      'Apply pressure to stop bleeding',
      'Apply antibiotic ointment if available',
      'Cover with sterile bandage',
      'Elevate injured area if possible',
      'Seek medical attention for deep wounds',
      'Report to local animal control'
    ],
    warnings: [
      'Deep puncture wounds',
      'Excessive bleeding',
      'Signs of infection (redness, warmth, pus)',
      'Numbness or tingling',
      'Unable to move affected area'
    ],
    seekHelp: [
      'Deep or large wounds',
      'Bite on face, hands, or genitals',
      'Signs of infection develop',
      'Unknown vaccination status of dog',
      'Wound won\'t stop bleeding'
    ]
  },
  {
    id: 'paralysis',
    name: 'Paralysis',
    icon: '🦽',
    hint: 'Stroke & nerve emergency',
    requiresOTP: true,
    description: 'Sudden paralysis may indicate stroke or serious neurological emergency.',
    firstAid: [
      'Call emergency services immediately',
      'Note time symptoms started',
      'Keep person calm and comfortable',
      'Do not give food or drink',
      'Loosen tight clothing',
      'Monitor breathing and consciousness',
      'Perform FAST test: Face, Arms, Speech, Time'
    ],
    warnings: [
      'Sudden weakness on one side',
      'Facial drooping',
      'Slurred speech',
      'Severe headache',
      'Vision problems'
    ],
    seekHelp: [
      'Any sudden paralysis',
      'Facial drooping',
      'Arm weakness',
      'Speech difficulties',
      'Time is critical - call immediately'
    ]
  },
  {
    id: 'heartpain',
    name: 'Heart Pain / Cardiac',
    icon: '❤️',
    hint: 'Chest pain protocol',
    requiresOTP: true,
    description: 'Chest pain may indicate heart attack - immediate action required.',
    firstAid: [
      'Call emergency services immediately',
      'Help person sit in comfortable position',
      'Loosen tight clothing',
      'If conscious and not allergic, give aspirin to chew',
      'Stay calm and reassure the person',
      'Monitor breathing and consciousness',
      'Be prepared to perform CPR if needed'
    ],
    warnings: [
      'Crushing chest pain',
      'Pain radiating to arm, jaw, or back',
      'Shortness of breath',
      'Sweating and nausea',
      'Feeling of impending doom'
    ],
    seekHelp: [
      'Any chest pain lasting more than 5 minutes',
      'Chest discomfort with other symptoms',
      'History of heart disease',
      'Pain not relieved by rest',
      'Difficulty breathing'
    ]
  },
  {
    id: 'waterborne',
    name: 'Waterborne Disease',
    icon: '💧',
    hint: 'Dehydration & infection',
    requiresOTP: false,
    description: 'Waterborne illnesses cause dehydration and require proper hydration.',
    firstAid: [
      'Ensure access to clean drinking water',
      'Give oral rehydration solution (ORS)',
      'Rest and avoid solid foods initially',
      'Monitor for dehydration signs',
      'Maintain hygiene to prevent spread',
      'Seek medical care if symptoms persist',
      'Keep person cool and comfortable'
    ],
    warnings: [
      'Severe diarrhea or vomiting',
      'Blood in stool',
      'High fever',
      'Signs of dehydration',
      'Inability to keep fluids down'
    ],
    seekHelp: [
      'Symptoms last more than 2 days',
      'Severe dehydration',
      'Blood in vomit or stool',
      'High fever',
      'Extreme weakness'
    ]
  }
];

export const additionalConditions = {
  respiratory: [
    {
      id: 'asthma',
      name: 'Asthma Attack',
      icon: '🫁',
      description: 'Sudden narrowing of airways causing breathing difficulty.',
      firstAid: [
        'Airway management: Help person sit upright',
        'Breathing monitoring: Encourage slow, steady breathing',
        'Immediate first aid: Help them use their inhaler if they have one'
      ],
      warnings: ['Severe breathlessness', 'Blue lips', 'Unable to speak'],
      seekHelp: ['Inhaler not helping', 'Severe attack', 'First-time attack', 'Seek emergency medical help if no improvement in 5-10 minutes']
    },
    {
      id: 'choking',
      name: 'Choking',
      icon: '😮',
      description: 'Airway blockage preventing breathing.',
      firstAid: [
        'Airway management: Encourage coughing if possible',
        'Immediate first aid: Perform back blows (5 times)',
        'Immediate first aid: Perform abdominal thrusts if needed'
      ],
      warnings: ['Cannot cough or speak', 'Turning blue', 'Losing consciousness'],
      seekHelp: ['Complete airway obstruction', 'Unconscious', 'Seek emergency medical help if obstruction persists']
    },
    {
      id: 'pneumonia',
      name: 'Pneumonia',
      icon: '🤒',
      description: 'Infection that inflames air sacs in one or both lungs.',
      firstAid: [
        'Airway management: Ensure clear airway',
        'Breathing monitoring: Monitor breathing rate and difficulty',
        'Immediate first aid: Rest and stay hydrated'
      ],
      warnings: ['High fever', 'Chest pain when breathing', 'Confusion'],
      seekHelp: ['Difficulty breathing', 'Bluish color to lips', 'Seek emergency medical help if symptoms are severe']
    },
    {
      id: 'tuberculosis',
      name: 'Tuberculosis',
      icon: '🩻',
      description: 'Serious infectious bacterial disease that mainly affects the lungs.',
      firstAid: [
        'Airway management: Wear a mask to prevent spread',
        'Breathing monitoring: Monitor for chest pain or coughing blood',
        'Immediate first aid: Isolate and rest'
      ],
      warnings: ['Coughing up blood', 'Persistent fever', 'Severe weight loss'],
      seekHelp: ['Coughing massive amounts of blood', 'Chest pain', 'Seek emergency medical help immediately']
    }
  ],
  injuries: [
    {
      id: 'burns',
      name: 'Burns',
      icon: '🔥',
      description: 'Thermal injury to skin and tissues.',
      firstAid: [
        'Trauma first aid: Cool burn with running water for 20 minutes',
        'Trauma first aid: Remove jewelry before swelling',
        'Trauma first aid: Cover with clean, non-stick dressing'
      ],
      warnings: ['Large area burned', 'Deep burns', 'Burns on face or hands'],
      seekHelp: ['Third-degree burns', 'Hospital referral advice: Seek immediate care for chemical or electrical burns']
    },
    {
      id: 'fracture',
      name: 'Fractures',
      icon: '🦴',
      description: 'Broken bone requiring immobilization.',
      firstAid: [
        'Immobilization guidance: Immobilize the injured area',
        'Trauma first aid: Apply ice to reduce swelling',
        'Trauma first aid: Do not try to realign bone'
      ],
      warnings: ['Bone protruding', 'Severe deformity', 'Numbness below injury'],
      seekHelp: ['Open fracture', 'Suspected spinal fracture', 'Hospital referral advice: Go to ER immediately']
    },
    {
      id: 'bleeding',
      name: 'Severe Bleeding',
      icon: '🩸',
      description: 'Heavy blood loss requiring immediate control.',
      firstAid: [
        'Bleeding control: Apply direct pressure with clean cloth',
        'Bleeding control: Elevate injured area above heart',
        'Bleeding control: Apply pressure bandage'
      ],
      warnings: ['Spurting blood', 'Soaking through bandages', 'Signs of shock'],
      seekHelp: ['Uncontrolled bleeding', 'Arterial bleeding', 'Hospital referral advice: Call emergency immediately']
    },
    {
      id: 'tetanus',
      name: 'Tetanus',
      icon: '🦠',
      description: 'Serious bacterial infection causing painful muscle spasms.',
      firstAid: [
        'Trauma first aid: Clean any deep wounds immediately',
        'Bleeding control: Control any bleeding'
      ],
      warnings: ['Jaw cramping', 'Muscle spasms', 'Painful muscle stiffness'],
      seekHelp: ['Trouble swallowing', 'Breathing difficulty', 'Hospital referral advice: Needs immediate ER care']
    },
    {
      id: 'rabies',
      name: 'Rabies Risk',
      icon: '🦇',
      description: 'Dog bite complication handling.',
      firstAid: [
        'Trauma first aid: Wash wound thoroughly with soap and water immediately for 15 minutes',
        'Bleeding control: Apply pressure if bleeding',
        'Trauma first aid: Apply povidone-iodine if available'
      ],
      warnings: ['Bitten by a stray or wild animal', 'Animal acting strangely', 'Deep puncture wounds'],
      seekHelp: ['All animal bites require evaluation', 'Hospital referral advice: Seek immediate rabies vaccination']
    },
    {
      id: 'suicide',
      name: 'Suicide Risk',
      icon: '🧠',
      description: 'Provide safe mental health help instructions.',
      firstAid: [
        'Trauma first aid: Remove any lethal means (weapons, pills)',
        'Trauma first aid: Do not leave the person alone',
        'Trauma first aid: Listen without judgment'
      ],
      warnings: ['Talking about wanting to die', 'Looking for a way to kill oneself', 'Talking about feeling hopeless'],
      seekHelp: ['Immediate risk of harm', 'Hospital referral advice: Take to nearest ER or call emergency services']
    }
  ],
  environmental: [
    {
      id: 'malaria',
      name: 'Malaria',
      icon: '🦟',
      description: 'Mosquito-borne infectious disease.',
      firstAid: [
        'Immediate response: Rest and stay hydrated',
        'Immediate response: Manage fever with approved medication'
      ],
      warnings: ['Symptom recognition: High fever, chills, and sweating', 'Severe headache'],
      seekHelp: ['Danger signal: Confusion or seizures', 'Emergency transport recommendation: Go to hospital immediately']
    },
    {
      id: 'dengue',
      name: 'Dengue',
      icon: '🦟',
      description: 'Viral disease transmitted by mosquitoes.',
      firstAid: [
        'Immediate response: Stay hydrated',
        'Immediate response: Use acetaminophen for fever, avoid NSAIDs'
      ],
      warnings: ['Symptom recognition: High fever, severe joint and muscle pain', 'Rash'],
      seekHelp: ['Danger signal: Severe abdominal pain, bleeding gums', 'Emergency transport recommendation: Seek trauma care immediately']
    },
    {
      id: 'cholera',
      name: 'Cholera',
      icon: '🚰',
      description: 'Bacterial disease causing severe diarrhea and dehydration.',
      firstAid: [
        'Immediate response: Give Oral Rehydration Solution (ORS) immediately',
        'Immediate response: Continue drinking fluids'
      ],
      warnings: ['Symptom recognition: Profuse watery diarrhea', 'Vomiting', 'Leg cramps'],
      seekHelp: ['Danger signal: Severe dehydration, sunken eyes', 'Emergency transport recommendation: Rush to hospital']
    },
    {
      id: 'diarrhea',
      name: 'Severe Diarrhea / Gastroenteritis',
      icon: '🚽',
      description: 'Inflammation of stomach and intestines.',
      firstAid: [
        'Immediate response: Drink plenty of fluids (ORS)',
        'Immediate response: Rest and eat bland foods'
      ],
      warnings: ['Symptom recognition: Watery stools, abdominal cramps, nausea', 'Signs of dehydration'],
      seekHelp: ['Danger signal: Blood in stool, high fever, inability to keep fluids down', 'Emergency transport recommendation: Seek medical care']
    },
    {
      id: 'skin_infection',
      name: 'Skin Infections',
      icon: '🦠',
      description: 'Bacterial, fungal, or viral infections of the skin.',
      firstAid: [
        'Immediate response: Keep area clean and dry',
        'Immediate response: Do not pop or squeeze sores'
      ],
      warnings: ['Symptom recognition: Redness, swelling, warmth, pain', 'Pus or oozing'],
      seekHelp: ['Danger signal: Red streak spreading, fever, severe pain', 'Emergency transport recommendation: Need medical evaluation']
    },
    {
      id: 'worm_infection',
      name: 'Parasitic Worm Infections',
      icon: '🪱',
      description: 'Infection by parasitic worms.',
      firstAid: [
        'Immediate response: Maintain good hygiene',
        'Immediate response: Wash hands thoroughly'
      ],
      warnings: ['Symptom recognition: Abdominal pain, diarrhea, visible worms in stool', 'Weight loss'],
      seekHelp: ['Danger signal: Severe abdominal pain, vomiting', 'Emergency transport recommendation: See doctor for deworming treatment']
    },
    {
      id: 'anemia',
      name: 'Anemia',
      icon: '🩸',
      description: 'Condition in which you lack enough healthy red blood cells.',
      firstAid: [
        'Immediate response: Rest if feeling faint',
        'Immediate response: Focus on iron-rich diet'
      ],
      warnings: ['Symptom recognition: Fatigue, weakness, pale skin, cold hands/feet', 'Dizziness'],
      seekHelp: ['Danger signal: Chest pain, fainting, shortness of breath', 'Emergency transport recommendation: Urgent medical assessment']
    },
    {
      id: 'malnutrition',
      name: 'Malnutrition',
      icon: '🍲',
      description: 'Lack of sufficient nutrients in the body.',
      firstAid: [
        'Immediate response: Provide small, frequent, nutrient-dense meals',
        'Immediate response: Ensure adequate hydration'
      ],
      warnings: ['Symptom recognition: Severe weight loss, fatigue, swollen abdomen', 'Frequent infections'],
      seekHelp: ['Danger signal: Extreme weakness, inability to eat, severe swelling', 'Emergency transport recommendation: Immediate hospitalization']
    },
    {
      id: 'chickenpox',
      name: 'Chicken Pox',
      icon: '🤧',
      description: 'Highly contagious viral infection causing an itchy, blister-like rash.',
      firstAid: [
        'Immediate response: Keep the person isolated',
        'Immediate response: Use calamine lotion for itching',
        'Immediate response: Do not scratch blisters'
      ],
      warnings: ['Symptom recognition: Fever, fatigue, itchy fluid-filled blisters', 'Loss of appetite'],
      seekHelp: ['Danger signal: Rash spreads to eyes, severe skin infection, breathing difficulty', 'Emergency transport recommendation: Seek medical care']
    },
    {
      id: 'heatstroke',
      name: 'Heat Stroke',
      icon: '🌡️',
      description: 'Life-threatening condition from overheating.',
      firstAid: [
        'Immediate response: Move to cool area immediately',
        'Immediate response: Remove excess clothing',
        'Immediate response: Cool with water and fanning'
      ],
      warnings: ['Symptom recognition: High body temperature, confusion', 'No sweating'],
      seekHelp: ['Danger signal: Temperature above 104F, unconsciousness, seizures', 'Emergency transport recommendation: Call emergency transport immediately']
    },
    {
      id: 'hypothermia',
      name: 'Hypothermia',
      icon: '🥶',
      description: 'Dangerously low body temperature.',
      firstAid: [
        'Immediate response: Move to warm area',
        'Immediate response: Remove wet clothing',
        'Immediate response: Wrap in blankets'
      ],
      warnings: ['Symptom recognition: Shivering, confusion, slurred speech', 'Slow breathing'],
      seekHelp: ['Danger signal: Shivering stops, unconsciousness, irregular heartbeat', 'Emergency transport recommendation: Evacuate to hospital immediately']
    },
    {
      id: 'poisoning',
      name: 'Poisoning',
      icon: '☠️',
      description: 'Ingestion or exposure to toxic substances.',
      firstAid: [
        'Immediate response: Call poison control immediately',
        'Immediate response: Do not induce vomiting unless instructed',
        'Immediate response: Keep container for identification'
      ],
      warnings: ['Symptom recognition: Nausea, vomiting, diarrhea, burns around mouth', 'Confusion'],
      seekHelp: ['Danger signal: Difficulty breathing, seizures, unconsciousness', 'Emergency transport recommendation: Immediate ER transport']
    },
    {
      id: 'kidney_disease',
      name: 'Kidney Disease Complications',
      icon: '🩺',
      description: 'Kidney disease emergency complications.',
      firstAid: [
        'Immediate response: Monitor fluid intake and output',
        'Immediate response: Rest and avoid exertion'
      ],
      warnings: ['Symptom recognition: Severe swelling in legs/ankles, shortness of breath', 'Confusion'],
      seekHelp: ['Danger signal: Chest pain, irregular heartbeat, inability to urinate', 'Emergency transport recommendation: Urgent hospital care needed']
    },
    {
      id: 'pregnancy',
      name: 'Pregnancy Complications',
      icon: '🤰',
      description: 'Pregnancy difficulty warning guidance.',
      firstAid: [
        'Immediate response: Rest on left side',
        'Immediate response: Stay calm and monitor symptoms'
      ],
      warnings: ['Symptom recognition: Severe abdominal pain, heavy bleeding, severe headache', 'Vision changes'],
      seekHelp: ['Danger signal: Decreased fetal movement, rupture of membranes before term', 'Emergency transport recommendation: Rush to maternity ER']
    }
  ]
};
