// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7kVsdbI38Qsv6fH44TQ27WYz2QrnlQ78",
  authDomain: "prepview-7ed7f.firebaseapp.com",
  projectId: "prepview-7ed7f",
  storageBucket: "prepview-7ed7f.firebasestorage.app",
  messagingSenderId: "500662991838",
  appId: "1:500662991838:web:ae6b7f7bef86a075e5bb4f",
  measurementId: "G-8STFHY656Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
