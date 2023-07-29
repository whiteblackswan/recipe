import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyADHI7M1QQ8Ix5JTIc_NVeAwUwEwa7dNDo",
	authDomain: "recipe-directory-site-d342d.firebaseapp.com",
	projectId: "recipe-directory-site-d342d",
	storageBucket: "recipe-directory-site-d342d.appspot.com",
	messagingSenderId: "584907915298",
	appId: "1:584907915298:web:3c1ebc8f5c787c149d0a7b"
 };

 //init firebase
 firebase.initializeApp(firebaseConfig)

 //init services
const projectFirestore = firebase.firestore()

export { projectFirestore }