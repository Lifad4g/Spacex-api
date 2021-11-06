import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import firebase from "firebase";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// The reason why i used 3 three imports some reason editor didnt wanna see the firebase.
let config = { 
  apiKey: "AIzaSyA8U30o4NQuPANcxaaL9Zi5EnyYfXP4zcQ",
  authDomain: "spacex-8c10d.firebaseapp.com",
  databaseURL: "https://spacex-8c10d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spacex-8c10d",
  storageBucket: "spacex-8c10d.appspot.com",
  messagingSenderId: "960310302570",
  appId: "1:960310302570:web:41e8b2e40ad1010e06b713",
  measurementId: "G-ZQV0F805DF"
};

firebase.initializeApp(config);
createApp(App).use(router).mount('#app')
