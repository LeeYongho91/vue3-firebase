// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useAuthStore } from '@/stores/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeyASgW0IvO8VwvpWpLJjeNlAYLdGoMhQ",
  authDomain: "vue3-firebase-app-c73fe.firebaseapp.com",
  projectId: "vue3-firebase-app-c73fe",
  storageBucket: "vue3-firebase-app-c73fe.appspot.com",
  messagingSenderId: "1079490136823",
  appId: "1:1079490136823:web:36613fe0279576bab661f2",
  measurementId: "G-E8XBXF30C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default boot(async () => {
  onAuthStateChanged(auth, user => {
    console.log('user', user);
  })
})