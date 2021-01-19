import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB0TpquNfGVL3xRo-fmUm_pwkSxXLh1vZM",
        authDomain: "eggiechat.firebaseapp.com",
        projectId: "eggiechat",
        storageBucket: "eggiechat.appspot.com",
        messagingSenderId: "796791645099",
        appId: "1:796791645099:web:f1e1c23b56d57924e628ee"
       
});
const db=firebaseApp.firestore();
export default db;