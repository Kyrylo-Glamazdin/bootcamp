import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import FormEdit from './FormEdit'
//import ContactCard from './ContactCard';
//import Decrement from './Decrement';

ReactDOM.render(
 <div>
 	<FormEdit firstName="John" lastName="Smith"/>
 </div>,
  document.getElementById('root')
);