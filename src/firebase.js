import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyGIrZqEisxKNFNBIR0JnVGTZm4XcPc8E",
  authDomain: "proyecto-react-a3b7e.firebaseapp.com",
  projectId: "proyecto-react-a3b7e",
  storageBucket: "proyecto-react-a3b7e.appspot.com",
  messagingSenderId: "730415209790",
  appId: "1:730415209790:web:7841601c9583e8a940606f",
  measurementId: "G-HFXSEWKSX6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);