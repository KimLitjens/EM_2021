import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebaseData } from './lib/firebaseconfig'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebaseData, }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
