import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

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