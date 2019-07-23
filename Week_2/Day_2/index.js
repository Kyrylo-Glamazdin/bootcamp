import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import ContactCard from './ContactCard';
import Decrement from './Decrement';

ReactDOM.render(
     <div>
                <Decrement num={10}/>
                
                
           <ContactCard name="Tom" mobileNum="+1(123)456-7890" email="tom@tomMail.com" workNum="+1(121)454-6776"/>
           <ContactCard name="Julia" mobileNum="+1(908)765-4321" email="julia@juliaMail.com"/>
           <ContactCard name = "Alex" mobileNum="+1(173)816-941" email="alex@alexMail.com" workNum="+1(573)273-6891"/>
                
 </div>,
  document.getElementById('root')
);
