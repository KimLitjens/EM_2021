import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firestore } from './lib/firebaseconfig'
import FirestoreContext from './context/FirestoreContext'

ReactDOM.render(
  <FirestoreContext.Provider value={{ firestore }}>
    <App />
  </FirestoreContext.Provider>,
  document.getElementById('root')
);
