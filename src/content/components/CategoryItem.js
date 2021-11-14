import React from 'react'

export default function CategoryItem({categoryImg}) {
    return (
        <li className="category_item col-xs-3 col-sm-6">
            <div className="category_item-wrapper py-10">
                <img src={categoryImg}/>
            </div>
        </li>
    )
}
