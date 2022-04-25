import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD9hDdw_i_B9_GXVNPuki4bZ0lflSq12hk",
    authDomain: "jun-dev-work.firebaseapp.com",
    projectId: "jun-dev-work",
    storageBucket: "jun-dev-work.appspot.com",
    messagingSenderId: "822925367195",
    appId: "1:822925367195:web:27584d0f0d1ee60ef1733e",
    measurementId: "G-RZ4MEN457F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const loginUser = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};
