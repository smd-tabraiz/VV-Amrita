import { openDB } from 'idb';

const DB_NAME = 'MedicalAssistantDB';
const DB_VERSION = 1;

export async function initDatabase() {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Store for medical responses cache
      if (!db.objectStoreNames.contains('responses')) {
        db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true });
      }
      
      // Store for user session data
      if (!db.objectStoreNames.contains('sessions')) {
        db.createObjectStore('sessions', { keyPath: 'id' });
      }
      
      // Store for offline medical dataset
      if (!db.objectStoreNames.contains('medicalData')) {
        db.createObjectStore('medicalData', { keyPath: 'keyword' });
      }
    }
  });
  
  // Preload medical dataset
  await preloadMedicalDataset(db);
  
  return db;
}

async function preloadMedicalDataset(db) {
  const tx = db.transaction('medicalData', 'readwrite');
  const store = tx.objectStore('medicalData');
  
  // Check if data already exists
  const count = await store.count();
  if (count > 0) return;
  
  // Preload essential medical keywords and responses
  const medicalDataset = [
    {
      keyword: 'fever',
      response: 'Fever is a temporary increase in body temperature. Rest, stay hydrated, and take fever-reducing medication if needed. Seek medical help if fever exceeds 103°F (39.4°C) or lasts more than 3 days.'
    },
    {
      keyword: 'headache',
      response: 'Headaches can have various causes. Rest in a quiet, dark room, stay hydrated, and consider over-the-counter pain relief. Seek immediate help for sudden severe headaches, especially with vision changes or neck stiffness.'
    },
    {
      keyword: 'cough',
      response: 'Coughing helps clear airways. Stay hydrated, use honey for throat relief, and rest. Seek medical attention if cough persists beyond 3 weeks, produces blood, or is accompanied by high fever.'
    },
    {
      keyword: 'chest pain',
      response: 'Chest pain can indicate serious conditions. Call emergency services immediately if experiencing crushing chest pain, pain radiating to arm/jaw, shortness of breath, or sweating.'
    },
    {
      keyword: 'breathing difficulty',
      response: 'Difficulty breathing is a medical emergency. Sit upright, stay calm, and call emergency services immediately. If person has asthma inhaler, help them use it.'
    },
    {
      keyword: 'allergic reaction',
      response: 'Mild allergies cause itching and rash. Severe reactions (anaphylaxis) cause breathing difficulty and require immediate epinephrine and emergency care. Call 911 for severe reactions.'
    },
    {
      keyword: 'dizziness',
      response: 'Dizziness can result from dehydration, low blood sugar, or other causes. Sit or lie down immediately, drink water, and avoid sudden movements. Seek help if persistent or with other symptoms.'
    },
    {
      keyword: 'nausea',
      response: 'Nausea can have many causes. Sip clear fluids, avoid solid foods initially, and rest. Seek medical attention if accompanied by severe pain, blood in vomit, or signs of dehydration.'
    },
    {
      keyword: 'wound care',
      response: 'Clean wounds with soap and water, apply pressure to stop bleeding, apply antibiotic ointment, and cover with clean bandage. Seek medical care for deep wounds, excessive bleeding, or signs of infection.'
    },
    {
      keyword: 'dehydration',
      response: 'Dehydration occurs from insufficient fluid intake. Drink water or oral rehydration solution, rest, and avoid strenuous activity. Seek medical help for severe dehydration, especially in children or elderly.'
    }
  ];
  
  for (const data of medicalDataset) {
    await store.put(data);
  }
  
  await tx.done;
}

export async function getCachedResponse(keyword) {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.get('medicalData', keyword.toLowerCase());
}

export async function saveSession(sessionData) {
  const db = await openDB(DB_NAME, DB_VERSION);
  await db.put('sessions', { id: 'current', ...sessionData, timestamp: Date.now() });
}

export async function getSession() {
  const db = await openDB(DB_NAME, DB_VERSION);
  return await db.get('sessions', 'current');
}
