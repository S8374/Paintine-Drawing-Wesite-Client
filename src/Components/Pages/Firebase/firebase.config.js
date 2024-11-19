// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8IO16G-_hVpM7Dzz-n_yLYE_Q_AVsDhE",
  authDomain: "assainment-10-7e4ab.firebaseapp.com",
  projectId: "assainment-10-7e4ab",
  storageBucket: "assainment-10-7e4ab.firebasestorage.app",
  messagingSenderId: "917718617137",
  appId: "1:917718617137:web:aca32b3d4ead858256d910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(app);
export { auth, facebookProvider };