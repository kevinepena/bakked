import Rebase from 're-base';
import firebase from 'firebase';


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCp-E0Nq2cNlVE6n-ioKD_IkSxY9LijKlM",
    authDomain: "kp-blog1.firebaseapp.com",
    databaseURL: "https://kp-blog1.firebaseio.com",
    projectId: "kp-blog1",
    storageBucket: "kp-blog1.appspot.com",
    messagingSenderId: "1027774753810"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base; 