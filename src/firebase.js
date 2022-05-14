import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAuUuw0ktCw6a8kFcMb52VHlQlbI-h1DaA",
  authDomain: "websiteauth-bb61e.firebaseapp.com",
  projectId: "websiteauth-bb61e",
  storageBucket: "websiteauth-bb61e.appspot.com",
  messagingSenderId: "719470881378",
  appId: "1:719470881378:web:56b088af35cf55da867f3b",
  measurementId: "G-0RP8HSV2DM"
})

export const auth = app.auth()
export default app
