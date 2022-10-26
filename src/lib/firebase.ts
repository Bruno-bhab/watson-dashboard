import firebase from "firebase/app";
import 'firebase/auth';

firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
})

export { firebase };

// const firebaseConfig = {
//   apiKey: "AIzaSyDvD45FC1qY4_cfl5L7n2E9EUecLNg08FQ",
//   authDomain: "watson-dashboard.firebaseapp.com",
//   projectId: "watson-dashboard",
//   storageBucket: "watson-dashboard.appspot.com",
//   messagingSenderId: "407118393807",
//   appId: "1:407118393807:web:82ee5c9b1c2e4ee5ff22ba"
// };
