import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQ420ao0zBTSljvv9cUFKjcYEhqJY0ed0",
  authDomain: "finish-4871d.firebaseapp.com",
  projectId: "finish-4871d",
  storageBucket: "finish-4871d.appspot.com",
  messagingSenderId: "1027533472934",
  appId: "1:1027533472934:web:530d5afa48529e600da067",
  measurementId: "G-BW2DTSERC1"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
