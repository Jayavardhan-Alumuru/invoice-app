import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBL9vyjwQbe7AGcdz_slJedtRUPYgSOunw",
  authDomain: "invoice-app-68dee.firebaseapp.com",
  projectId: "invoice-app-68dee",
  storageBucket: "invoice-app-68dee.appspot.com",
  messagingSenderId: "623361352378",
  appId: "1:623361352378:web:3a8a974c731186b5261883"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
