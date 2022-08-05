import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBcVb3mw4Gkr2_wenMsocRq0ZL0M127qZc",
//     authDomain: "rcctechz-website.firebaseapp.com",
//     projectId: "rcctechz-website",
//     storageBucket: "rcctechz-website.appspot.com",
//     messagingSenderId: "757685762067",
//     appId: "1:757685762067:web:e4a2839744163e427ea7e6",
//     measurementId: "G-Y13M7J74N2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;