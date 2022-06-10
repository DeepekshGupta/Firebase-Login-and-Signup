import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDLjhW3Ql_wUu6iZfZ1wFy5hDYvVjm0bLU",
  authDomain: "instaclone-react-e504c.firebaseapp.com",
  projectId: "instaclone-react-e504c",
  storageBucket: "instaclone-react-e504c.appspot.com",
  messagingSenderId: "256203631680",
  appId: "1:256203631680:web:6fc1dbbaffc3a30b04c3a5",
  measurementId: "G-KWTN4NCS08"
})

export const auth = app.auth()
export const db=app.firestore()
export default app


