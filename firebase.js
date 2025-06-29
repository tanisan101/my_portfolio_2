import { initializeApp } from './node_modules/firebase/app/dist/index.esm.js';
import { getFirestore } from './node_modules/firebase/firestore/dist/index.esm.js';
import { getAuth } from './node_modules/firebase/auth/dist/index.esm.js';
import { getStorage } from './node_modules/firebase/storage/dist/index.esm.js';
import { getAnalytics } from './node_modules/firebase/analytics/dist/index.esm.js';

const firebaseConfig = {
  apiKey: "AIzaSyBF1jJ4IHp09wawaCEKCNFdInA19DFivGY",
  authDomain: "portfolio-tanishka.firebaseapp.com",
  projectId: "portfolio-tanishka",
  storageBucket: "portfolio-tanishka.firebasestorage.app",
  messagingSenderId: "651655343118",
  appId: "1:651655343118:web:827d078da95df66328e05f",
  measurementId: "G-J1EJYBNPJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, auth, storage, analytics };