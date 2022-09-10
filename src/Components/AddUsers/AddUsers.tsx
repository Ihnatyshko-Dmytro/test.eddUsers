import React from 'react';
import { useState } from 'react'

import { Form } from '../Form';

import './style.scss'



export const AddUsers: React.FC = () => {

    const [selected, setSelected] = useState(false);
  
    const toggle = () => {
      setSelected(!selected);
      }
    
  
    return (

        <div className="addUser">
            <div className="formTitle" onClick={toggle}>
            <h3 className='formTitle__h3'>Додати користувача</h3>
            <div className={selected ? "formTitle--close" : "formTitle--open"}></div>
          </div>
  
          <div className={selected ? "formBody  show" : "formBody"}>
            <Form/> 
          </div>
  
        </div>
    );
  };
  
