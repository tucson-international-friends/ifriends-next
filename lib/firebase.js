// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const API_KEY = process.env.FIREBASE_API_KEY;
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || "tucson-international-friends";
const SENDER_ID = process.env.FIREBASE_SENDER_ID;
const { APP_ID } = process.env;


const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: `${PROJECT_ID}.firebaseapp.com`,
	databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
	projectId: PROJECT_ID,
	storageBucket: `${PROJECT_ID}.appspot.com`,
	messagingSenderId: SENDER_ID,
	appId: APP_ID
};

const project = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export default project;
