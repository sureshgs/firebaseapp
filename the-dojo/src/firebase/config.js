import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDy8hpQMsLAjqaRwsEWq5m1ITkJz_CzXS4",
  authDomain: "dojoapp-ab40f.firebaseapp.com",
  projectId: "dojoapp-ab40f",
  storageBucket: "dojoapp-ab40f.appspot.com",
  messagingSenderId: "856702176435",
  appId: "1:856702176435:web:0e6d5e95c12d4b2014b4c6"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }