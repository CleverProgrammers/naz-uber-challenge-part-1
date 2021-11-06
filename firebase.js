import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAi6xMpadDcdIqDbP0C3GsTYT0Y4SuJd9o',
  authDomain: 'uber-test-41656.firebaseapp.com',
  projectId: 'uber-test-41656',
  storageBucket: 'uber-test-41656.appspot.com',
  messagingSenderId: '316045467632',
  appId: '1:316045467632:web:97b79538f200944c394735',
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
