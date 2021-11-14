import React,{useState} from 'react'
import TabList from './TabList'
import ProductHeading from './ProductHeading'
import ProductList from './ProductList'
import {tabItems} from '../../data'
export default function ListProducts({
    products,
    }) {

    const [indexActive,setIndexActive] = useState(0);
    const [type,setType] = useState('newest');
    const handleTabItem = (index) => {
        setIndexActive(index);
    }
    const handleType = (type) => {
        setType(type);
    }

    return (
        <div className="products_category container">
            <div className="products_wrapper">
                <ProductHeading/>
                <TabList handleTabItem={handleTabItem} handleType={handleType} indexActive={indexActive}/>
                {tabItems.map((product,index) => {
                    return <ProductList 
                            indexActive={indexActive} 
                            products={products} 
                            key={index} 
                            index={index}
                            type={type}
                            />
                           
                })}
            </div>
        </div>
    )
}
