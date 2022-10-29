// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAiWcASvuX_btwzDkrTGG1nBT-HWhhAhs4",
//   authDomain: "blog-a0356.firebaseapp.com",
//   projectId: "blog-a0356",
//   storageBucket: "blog-a0356.appspot.com",
//   messagingSenderId: "468493809245",
//   appId: "1:468493809245:web:7bb2d532c5fefa5283bfb4",
//   measurementId: "G-2Q4K2SLE9K",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore();
// export const storage = getStorage(app);
// export const auth = getAuth();
// const analytics = getAnalytics(app);

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAiWcASvuX_btwzDkrTGG1nBT-HWhhAhs4",
  authDomain: "blog-a0356.firebaseapp.com",
  projectId: "blog-a0356",
  storageBucket: "blog-a0356.appspot.com",
  messagingSenderId: "468493809245",
  appId: "1:468493809245:web:7bb2d532c5fefa5283bfb4",
  measurementId: "G-2Q4K2SLE9K",
});

export const auth = app.auth();
export const db = getFirestore();
export const storage = getStorage(app);
export default app;
