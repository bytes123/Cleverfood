import React from 'react'
import ProductItems from './ProductItems'
export default function ProductList({
    indexActive,
    index,
    products,
    type
    }) {
      

    return (
        <ul className={indexActive === (index) ? "product_list active" : "product_list"}>
            <div className="product-row row">
                {products.map((productItem,index) => {
                    if(productItem.product_keyword == type) {
                        return <ProductItems  {...productItem} key={index} indexActive={indexActive}/>
                    }
                })}
            </div>        
        </ul>
    )
}
