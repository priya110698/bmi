import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyDMEHxLxlOtgXFyiW4ToyzFlVSu26Eu9hQ",
  authDomain: "my-project-1530684082213.firebaseapp.com",
  databaseURL: "https://my-project-1530684082213.firebaseio.com",
  projectId: "my-project-1530684082213",
  storageBucket: "my-project-1530684082213.appspot.com",
  messagingSenderId: "265649707327",
  appId: "1:265649707327:web:8c04fc7f4e2e5466525b8a",
  measurementId: "G-2FMZV0VQD0"
};


var fire = firebase.initializeApp(firebaseConfig);

export default fire;