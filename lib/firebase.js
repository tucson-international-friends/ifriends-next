// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC9PpzajNKUL7VOkTq2z00FLdQ7hzbTbO4",
	authDomain: "tucson-international-friends.firebaseapp.com",
	databaseURL: "https://tucson-international-friends.firebaseio.com",
	projectId: "tucson-international-friends",
	storageBucket: "tucson-international-friends.appspot.com",
	messagingSenderId: "418248782520",
	appId: "1:418248782520:web:589761b7ce5bba4e"
};

const project = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default project;
