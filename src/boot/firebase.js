import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { boot } from 'quasar/wrappers';
import { useAuthStore } from '@/stores/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


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
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

export default boot(async () => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log(user);
    authStore.setUser(user);
  })
})