// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTRwwZHVVgJx8WAJr1m6OKhMFXP1HwcI",
  authDomain: "test--davide.firebaseapp.com",
  databaseURL: "https://test--davide-default-rtdb.firebaseio.com",
  projectId: "test--davide",
  storageBucket: "test--davide.appspot.com",
  messagingSenderId: "8641881901",
  appId: "1:8641881901:web:9fdcbac9520788187755a4",
  measurementId: "G-G6CSYLCZY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore();
const citiesCol = collection(firestore, 'Tour');
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map(doc => doc.data());
console.log(cityList);