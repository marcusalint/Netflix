import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

const config = {    
apiKey: "AIzaSyCzmUJTLsk5ujSqXh3smwpCzsWSXKH1o6Y",
authDomain: "netflix-4de70.firebaseapp.com",
projectId: "netflix-4de70",
storageBucket: "netflix-4de70.appspot.com",
messagingSenderId: "259940630909",
appId: "1:259940630909:web:e633296272310bf2d7cc14"
};

const firebase = Firebase.initializeApp(config);

export {firebase};
