import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNz5dPyeaco8fYqSFvEw9dT0h8qIrJbaM',
  authDomain: 'uber-next-clone-live.firebaseapp.com',
  projectId: 'uber-next-clone-live',
  storageBucket: 'uber-next-clone-live.appspot.com',
  messagingSenderId: '1003543502936',
  appId: '1:1003543502936:web:2d55ac4a5aeee3796baa2d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
