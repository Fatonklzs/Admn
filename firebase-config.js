// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6Js3sXCV8B8qAb51dztNtR0IUbUCAmD8",
  authDomain: "websi-3aad8.firebaseapp.com",
  databaseURL: "https://websi-3aad8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "websi-3aad8",
  storageBucket: "websi-3aad8.firebasestorage.app",
  messagingSenderId: "92206097273",
  appId: "1:92206097273:web:783ed1109d79786d20c5a8",
  measurementId: "G-TM6P2LL17W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
