import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Store from './store';
import Modal from 'react-modal';

//entry file for webpack. Render the react content to the DOM. 
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  let store = Store();
  ReactDOM.render(<Root store={store}/>, root);
});
