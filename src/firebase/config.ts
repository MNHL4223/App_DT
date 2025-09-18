import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFeiOZWK9MqNGS2eMm34xCoCvSofbdAsY",
  authDomain: "app-dt-f68d8.firebaseapp.com",
  projectId: "app-dt-f68d8",
  storageBucket: "app-dt-f68d8.firebasestorage.app",
  messagingSenderId: "887642896280",
  appId: "1:887642896280:web:edf75a391503e1c2cbdded",
  measurementId: "G-8G2KS6CLZQ",
};

// Khởi tạo firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo firebase authen
export const auth = getAuth(app);
