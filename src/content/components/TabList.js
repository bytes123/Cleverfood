import React,{useState} from 'react'
import TabItems from './TabItems'
import {tabItems} from '../../data'
export default function TabList({
    handleTabItem,
    indexActive,
    handleType
    }) {
   
    return (
        <ul className="products_tab-list">
            {tabItems.map((item,index) => {
                return <TabItems key={index} {...item} 
                                active={indexActive === index && 'active'} 
                                handleTabItem={handleTabItem}
                                index={index}
                                handleType={handleType}
                />
            })}
            
        </ul>
    )
}
