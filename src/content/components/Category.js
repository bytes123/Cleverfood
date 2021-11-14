import React from 'react'
import CategoryItem from './CategoryItem'
import {categoryList} from '../../data'
export default function Category() {
    return (
        <div className="category">
            <div className="category_wrapper container">
                <ul className="category_list row">
                    {categoryList.map((item,index) => {
                        return (
                            <CategoryItem {...item} key={index}/>    
                        )
                    })} 
                </ul>
            </div>
        </div>
    )
}
