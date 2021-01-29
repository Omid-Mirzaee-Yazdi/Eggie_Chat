import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
       /* YOUR API KEYS */
});
const db=firebaseApp.firestore();
export default db;
