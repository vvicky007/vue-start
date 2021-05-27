import firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnfaJ1m4WSNcwa1B4wqjaenC08-G3JSGI",
  authDomain: "feel-football-ae938.firebaseapp.com",
  projectId: "feel-football-ae938",
  storageBucket: "feel-football-ae938.appspot.com",
  messagingSenderId: "1011670993637",
  appId: "1:1011670993637:web:5e4c69236c712255a0a20c",
  measurementId: "G-XYWTPH5YY2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// //@ts-ignore
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.auth();
