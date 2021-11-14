import React from 'react'
import { Link } from 'react-router-dom';
export default function ProductItems({
    indexActive,
    product_id,
    product_image,
    product_name,
    product_price
    }) {
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    return (
        <li className="product_item col-xs-6 col-sm-4 col-md-3">
            <div className="product_item-wrapper">
                <div className="product_item-img-wrapper">
                    <Link to={`/cleverfood/san-pham/${product_id}`} className="d-block" >
                        <img src={product_image} />
                    </Link>
                </div>
                <div className="product_item-infor">
                    <div className="product_item-title">
                        <Link to={`/cleverfood/san-pham/${product_id}`} className="d-block">
                            {product_name}
                        </Link>
                    </div>
                    <div className="product_item-price">
                        {formatNumber(product_price)}&nbsp;
                        <span className="product_item-unit unit">
                            đ
                        </span>
                    </div>
                </div>
            </div>
        </li>
    )
}
