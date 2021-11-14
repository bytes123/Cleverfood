import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export default function Toast({state}){
    return (
      <div>
        <ToastContainer style={{fontSize: "2rem"}}/>
      </div>
    );
  }