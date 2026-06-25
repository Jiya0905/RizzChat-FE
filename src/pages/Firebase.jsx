// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYKH32fP_hbyYOsgIepFl5hflWFezMOKI",
  authDomain: "auth-09-05-2007.firebaseapp.com",
  projectId: "auth-09-05-2007",
  storageBucket: "auth-09-05-2007.firebasestorage.app",
  messagingSenderId: "679103506310",
  appId: "1:679103506310:web:625b8ac76557aaa79aee07",
  measurementId: "G-L9XC8PT5Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;