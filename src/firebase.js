import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAbYOOIEv7OjS8kstf7yZUYYG0gHjUsL4s",
  authDomain: "chapter-9-eee8d.firebaseapp.com",
  projectId: "chapter-9-eee8d",
  storageBucket: "chapter-9-eee8d.appspot.com",
  messagingSenderId: "118026495485",
  appId: "1:118026495485:web:bdc7ce7ac660b871a12594",
  measurementId: "G-FGWY2PQ6WQ",
});

export const auth = app.auth();
export default app;
