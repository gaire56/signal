import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAdYccNUop3JtlWvMQug2CExlt0rl6m9Vw',
  authDomain: 'signal-clone-5a50a.firebaseapp.com',
  projectId: 'signal-clone-5a50a',
  storageBucket: 'signal-clone-5a50a.appspot.com',
  messagingSenderId: '685518797831',
  appId: '1:685518797831:web:6ead7a545df59c99a1bea2',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
