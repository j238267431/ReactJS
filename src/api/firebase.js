import firebase from 'firebase/compat'

const firebaseConfig = {
  apiKey: 'AIzaSyCLdP2CZXCxSgPextMjMi1yuxe_LADvLUk',
  authDomain: 'gb-chat-d823f.firebaseapp.com',
  databaseURL:
    'https://gb-chat-d823f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'gb-chat-d823f',
  storageBucket: 'gb-chat-d823f.appspot.com',
  messagingSenderId: '745845946640',
  appId: '1:745845946640:web:cf74303f3038604f320d95',
  measurementId: 'G-R1EG5L7Z4Q',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.database()
