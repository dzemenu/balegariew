// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDikNeM64MOUBG02fzI9r-LygPfigrWwA4",
    authDomain: "balegariew.firebaseapp.com",
    projectId: "balegariew",
    storageBucket: "balegariew.appspot.com",
    messagingSenderId: "657365895916",
    appId: "1:657365895916:web:8caaa82825811736b6f3c9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
const auth=getAuth()
export {app,provider,auth}
