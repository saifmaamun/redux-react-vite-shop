import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: 'AIzaSyBLFRRfTQRzZKQmvkTjBhfupbZyfTvpVrQ',
  authDomain: 'redux-shop-2b43d.firebaseapp.com',
  projectId: 'redux-shop-2b43d',
  storageBucket: 'redux-shop-2b43d.appspot.com',
  messagingSenderId: '552173219182',
  appId: '1:552173219182:web:07792343d1d6d2c0b2657f',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
