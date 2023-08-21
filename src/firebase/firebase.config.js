// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJxNeCmZgfTNg1_Sl_9GzCpP6LE9klok4",
  authDomain: "profit-prime.firebaseapp.com",
  projectId: "profit-prime",
  storageBucket: "profit-prime.appspot.com",
  messagingSenderId: "901408189518",
  appId: "1:901408189518:web:0c89db7556e79e336ca71f",
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
