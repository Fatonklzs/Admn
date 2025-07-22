// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBT_fE8bw5i3WQzL3D2FqtiRcMu2FcJ4",
  authDomain: "putra-84.firebaseapp.com",
  databaseURL: "https://putra-84-default-rtdb.firebaseio.com",
  projectId: "putra-84",
  storageBucket: "putra-84.firebasestorage.app",
  messagingSenderId: "771337257712",
  appId: "1:771337257712:web:12acd2fa7b0d7281f3b835",
  measurementId: "G-NCYTKQPPC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };