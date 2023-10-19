// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVhEMmshQtyY9bwgL3pU-Rf0YZG-k06SY",
    authDomain: "mujan-store.firebaseapp.com",
    projectId: "mujan-store",
    storageBucket: "mujan-store.appspot.com",
    messagingSenderId: "835768753545",
    appId: "1:835768753545:web:587d5f679f9dabb987d558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth