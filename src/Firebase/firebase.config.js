// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAboyJb8EcfooEGxmlF_clYWv_wKeQtgw0",
    authDomain: "clound-flare.firebaseapp.com",
    projectId: "clound-flare",
    storageBucket: "clound-flare.appspot.com",
    messagingSenderId: "561363994203",
    appId: "1:561363994203:web:706ad0999ff1425493a17e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;