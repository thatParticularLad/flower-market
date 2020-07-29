import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCkhjpu3mzk8BF8M7F3npiTfRjHN23wwng',
	authDomain: 'flower-market-react.firebaseapp.com',
	databaseURL: 'https://flower-market-react.firebaseio.com',
	projectId: 'flower-market-react',
	storageBucket: 'flower-market-react.appspot.com',
	messagingSenderId: '228645851709',
	appId: '1:228645851709:web:c9fedc03c319ca96495054',
	measurementId: 'G-6RP7HGS3TB',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
