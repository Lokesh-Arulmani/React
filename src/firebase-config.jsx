import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW5JEnc8D0ieZQAhtQFoPUYfAi4Oh2dEI",
  authDomain: "react-af194.firebaseapp.com",
  projectId: "react-af194",
  storageBucket: "react-af194.firebasestorage.app",
  messagingSenderId: "808794378029",
  appId: "1:808794378029:web:ea26f4a2ff175656cd8da4",
  measurementId: "G-Y4TFNB1ME3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  
  export const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  
  export default auth;