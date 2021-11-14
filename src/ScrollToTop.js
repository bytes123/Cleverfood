import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {

  useEffect(() => {
    window.scrollTo({ top: 0 });
        }, [useLocation]);
  

  // ...
};