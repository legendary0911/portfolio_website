import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth"

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FB_API_KEY,
//     authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FB_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FB_APP_ID
// };


const firebaseConfig = {
    apiKey: "AIzaSyA4HL_FAKrG5GdGfEzM1WuDLMcSCQV3pIw",
    authDomain: "portfolio-website-a592f.firebaseapp.com",
    projectId: "portfolio-website-a592f",
    storageBucket: "portfolio-website-a592f.appspot.com",
    messagingSenderId: "834134679310",
    appId: "1:834134679310:web:9c375c8a549bca810fc15f"
};

const app = initializeApp(firebaseConfig);

//google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
    let user = null;

    await signInWithPopup(auth, provider)
        .then((result) => {
            user = result.user
        }).catch((err) => {
            console.log(err)
        })

    return user;
}

