import json

new_data = '''export const additionalConditions = {
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
'''

with open('c:/Users/LENOVO/Desktop/sirisha/project/src/data/medicalData.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('export const additionalConditions = {')
if start_idx != -1:
    new_file_content = content[:start_idx] + new_data
    with open('c:/Users/LENOVO/Desktop/sirisha/project/src/data/medicalData.js', 'w', encoding='utf-8') as f:
        f.write(new_file_content)
    print("Updated medicalData.js successfully")
else:
    print("Could not find additionalConditions in medicalData.js")
