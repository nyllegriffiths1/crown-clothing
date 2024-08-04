// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZu4Bbk8tG6uCDC-k-96eciadnWllKP-M",
  authDomain: "crwn-db-7595a.firebaseapp.com",
  projectId: "crwn-db-7595a",
  storageBucket: "crwn-db-7595a.appspot.com",
  messagingSenderId: "13609355628",
  appId: "1:13609355628:web:2a15fb91196eae1b3a8b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);