// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_app_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtqESphZOLPTiMywOxxvkuUIRUpoCogek",
  authDomain: "doctors-pro-e5107.firebaseapp.com",
  projectId: "doctors-pro-e5107",
  storageBucket: "doctors-pro-e5107.appspot.com",
  messagingSenderId: "293126857772",
  appId: "1:293126857772:web:98cc28a11d305b644c1d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;