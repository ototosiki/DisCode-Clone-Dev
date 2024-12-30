import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth , GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD2MWuBsO9FbcI00HRDX8RhNCzwczy0qUo",
  authDomain: "discode-clone-fadef.firebaseapp.com",
  projectId: "discode-clone-fadef",
  storageBucket: "discode-clone-fadef.firebasestorage.app",
  messagingSenderId: "20899997732",
  appId: "1:20899997732:web:da00bb7c6637d737a890b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth , provider , db };

