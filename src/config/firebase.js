import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBORBJ3PhtsovjYLJF8vkABypz_l44miqo",
  authDomain: "todo-7babb.firebaseapp.com",
  databaseURL: "https://todo-7babb.firebaseio.com",
  projectId: "todo-7babb",
  storageBucket: "todo-7babb.appspot.com",
  messagingSenderId: "195759383106"
};

export default firebase.initializeApp(config);
