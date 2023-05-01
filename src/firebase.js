import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCP-Ho8WjJKb5HkYERe3WlPlIVTmA1ADUQ",
  authDomain: "beskjeder-84907.firebaseapp.com",
  databaseURL: "https://beskjeder-84907-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "beskjeder-84907",
  storageBucket: "beskjeder-84907.appspot.com",
  messagingSenderId: "1084695915116",
  appId: "1:1084695915116:web:9de8ead79c0ed628524649",
  measurementId: "G-K21377BH8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);