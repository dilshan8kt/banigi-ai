import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy7MUskKpHh7rDBoWLL8KUvW3d8ODQydw",
  authDomain: "banigi-ai.firebaseapp.com",
  projectId: "banigi-ai",
  storageBucket: "banigi-ai.appspot.com",
  messagingSenderId: "531601663434",
  appId: "1:531601663434:web:08b0011dfde739caf29b33",
  measurementId: "G-W6S9KTKJ3V",
};

// export const auth = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export const storage = firebase.storage();
export default firebase;
// const analytics = getAnalytics(app);
