import React,{useRef,useEffect,useState} from 'react'
import Carousel from './components/Carousel'
import Category from './components/Category'
import ListProducts from './components/ListProducts'
import PromoteSection from './components/PromoteSection'
import PromoteBanner from './components/PromoteBanner'
import FruitsBanner from './components/FruitsBanner'
import {useHistory} from 'react-router-dom'

import './content.css'
export default function Content({products}) {
    const history = useHistory();
    const content = useRef();
    const [y,setY] = useState()
    

    useEffect(() => {
        window.scrollTo(0, 0);
      },[history.location.pathname])

    
      

    return (
        <div ref={content} className="content">
            <div className="Content-wrapper pb-40">
                <Carousel/>
                <Category/>
                <ListProducts products={products}/>
                <PromoteBanner/>
                <PromoteSection products={products}/>
                <FruitsBanner/>
            </div>
        </div>
    )
}
