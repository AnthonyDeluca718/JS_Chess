import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Store from './store';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={Store}/>, root);
});

console.log("Hello world");
