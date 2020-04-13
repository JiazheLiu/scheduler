import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCiQTPdkd6Wb2SE9AQKb1N2MryR27wcjEE",
    authDomain: "schedule-cfe55.firebaseapp.com",
    databaseURL: "https://schedule-cfe55.firebaseio.com",
    projectId: "schedule-cfe55",
    storageBucket: "schedule-cfe55.appspot.com",
    messagingSenderId: "54025686110",
    appId: "1:54025686110:web:77777d71ac188766e578cf",
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;