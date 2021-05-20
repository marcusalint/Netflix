import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//  need to somehow seed the database

// we need a config here

const config = {};

const firebase = Firebase.initializeApp(config);

export {firebase};
