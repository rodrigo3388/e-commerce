import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAcLZvBT6vrTKYCqcsn0IGINvs_ECaTXGM",
  authDomain: "eshop-af520.firebaseapp.com",
  projectId: "eshop-af520",
  storageBucket: "eshop-af520.appspot.com",
  messagingSenderId: "25287663296",
  appId: "1:25287663296:web:d76f5d152aa9049ac6d725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
