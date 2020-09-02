import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA87SjMgPqKpvMPF1-XKLH_QyulFMqaIUc",
    authDomain: "reactjsapp-7588e.firebaseapp.com",
    databaseURL: "https://reactjsapp-7588e.firebaseio.com",
    projectId: "reactjsapp-7588e",
    storageBucket: "reactjsapp-7588e.appspot.com",
    messagingSenderId: "473870403010",
    appId: "1:473870403010:web:0973e2bbd7c5f7c6cb025b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;