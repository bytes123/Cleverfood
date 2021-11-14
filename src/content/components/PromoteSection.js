import React from 'react'
import ProductList from './ProductList'
export default function PromoteSection({
    products
    }) {
    return (
        <div className="promote_section container">
            <div className="promote_section-wrapper">
                <ProductList type='promote' products={products}/>
            </div>
        </div>
    )
}
