// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnKoYW418P2f8RhqXprLgvWsq20MenmoY",
  authDomain: "data-barang-d4966.firebaseapp.com",
  databaseURL:
    "https://data-barang-d4966-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-barang-d4966",
  storageBucket: "data-barang-d4966.appspot.com",
  messagingSenderId: "419367874362",
  appId: "1:419367874362:web:a36f8531f15ad16cea6a03",
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

export default appfirebase;

