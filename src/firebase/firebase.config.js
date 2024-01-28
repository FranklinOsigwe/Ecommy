// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_APPID,
};

// console.log({firebaseConfig})
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app















// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC_OjPlfNgw9qY7KoMu0JuCyY4PKR_rkwM",
//   authDomain: "mama-p-client.firebaseapp.com",
//   projectId: "mama-p-client",
//   storageBucket: "mama-p-client.appspot.com",
//   messagingSenderId: "659813832831",
//   appId: "1:659813832831:web:2a2add882033607fecc74a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app




















