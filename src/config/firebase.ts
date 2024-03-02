/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-69zoit_dPytwulAaYBPKIbaz1kEjOMQ',
  authDomain: 'oceanheart-8b555.firebaseapp.com',
  projectId: 'oceanheart-8b555',
  storageBucket: 'oceanheart-8b555.appspot.com',
  messagingSenderId: '877066157324',
  appId: '1:877066157324:web:be289d6d99e8e81c605d29',
  measurementId: 'G-ZV2DPLJXMP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
