import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBF-idro_9ZGkaFhBsLkK6fcm8d6rM7PIM',
	authDomain: 'i-ching-1223e.firebaseapp.com',
	projectId: 'i-ching-1223e',
	storageBucket: 'i-ching-1223e.appspot.com',
	messagingSenderId: '968613334298',
	appId: '1:968613334298:web:aedbd4bad33d84159430a3',
	measurementId: 'G-S6HE0DFM7Y',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// name string
// description string
// id number
// judgment string
// lines array
// linesMeaning array
// 「乾=1、兌=2、離=3、震=4、巽=5、坎=6、艮=7、坤=8」
