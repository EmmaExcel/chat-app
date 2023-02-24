
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCEjywtLRT5wSnhKmBKDj_6DCybvoDYDGQ",
  authDomain: "chat-f13f3.firebaseapp.com",
  projectId: "chat-f13f3",
  storageBucket: "chat-f13f3.appspot.com",
  messagingSenderId: "675048343961",
  appId: "1:675048343961:web:a68c3c3af74ae94d15eb08",
  measurementId: "G-30B2BG4X9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()