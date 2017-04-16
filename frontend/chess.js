import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Store from './store';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  let store = Store(); //testing purposes
  window.store = store; //testing purposes
  ReactDOM.render(<Root store={store}/>, root);
});
