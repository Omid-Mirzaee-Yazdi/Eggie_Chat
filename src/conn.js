import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBSPll2nTd7OIco4ijXsZbbk1f9QYFXdC0",
        authDomain: "mango-msg.firebaseapp.com",
        projectId: "mango-msg",
        storageBucket: "mango-msg.appspot.com",
        messagingSenderId: "1043857946734",
        appId: "1:1043857946734:web:0eb89da6f2dad41f990e7f",
        measurementId: "G-H8536D2SJR"
});
const db=firebaseApp.firestore();
export default db;