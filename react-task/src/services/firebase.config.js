import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA0eypCkZU4_rlMbbtcIgXCmaS0pkz8M7w",
    authDomain: "taskmanagerfb-f8a80.firebaseapp.com",
    projectId: "taskmanagerfb-f8a80",
    storageBucket: "taskmanagerfb-f8a80.appspot.com",
    messagingSenderId: "685921513544",
    appId: "1:685921513544:web:698fdacbf39db0286de87d",
    measurementId: "G-C5VT5YZYPF"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);