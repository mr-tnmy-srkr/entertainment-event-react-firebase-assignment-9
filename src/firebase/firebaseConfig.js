import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8culBDcyt1hgp6hnvTf-uHSYW9VIN520",
  authDomain: "entertainment-event-aa481.firebaseapp.com",
  projectId: "entertainment-event-aa481",
  storageBucket: "entertainment-event-aa481.appspot.com",
  messagingSenderId: "74170219491",
  appId: "1:74170219491:web:188083ca72b691194d3ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);