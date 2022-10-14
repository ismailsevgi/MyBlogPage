import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAbLjybKrKDS8TaTDzwW_tKAIWHaBtZWzQ',
  authDomain: 'fir-blog-29d7f.firebaseapp.com',
  projectId: 'fir-blog-29d7f',
  storageBucket: 'fir-blog-29d7f.appspot.com',
  messagingSenderId: '670866003183',
  appId: '1:670866003183:web:6a3eb2cd221b2766a3b71a',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);
