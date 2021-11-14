import React from 'react'
import {Link} from 'react-router-dom'
export default function CatalogList({
    formatNumber,
    header,    
    list,
    type
    }) {
    return (
        <div className="content_left-catalog-list">
            <div className="catalog_list-heading">
                <div className="catalog_list-header">
                    {header}
                </div>
            </div>
            <ul className="catalog_list">
                {
                    type === "catalog" &&
                    list.map((item,index) => (
                        <li className="catalog_item catalog_main" key={index}>
                            <Link to={`/cleverfood/danh-muc/${item.catalog_meta}`}>
                                {item.catalog_name}
                            </Link>
                        </li>
                    ))
                }
                {
                    type === "products_list" &&
                    list.map((item,index) => (
                        <li className="catalog_item" key={index}>
                            <Link className="catalog_item-products-link" to={`/cleverfood/san-pham/${item.product_id}`}>
                                <div className="catalog_item-img-wrapper">
                                    <img src={item.product_image} alt="" className="catalog_item-img" />
                                </div>
                                <div className="catalog_item-infor-wrapper">
                                    <div className="catalog_item-infor-heading">
                                        <h3 className="catalog_item-infor-header">
                                            {item.product_name}
                                        </h3>
                                    </div>
                                    <div className="catalog_item-infor-price">
                                        <p>
                                            {formatNumber(item.product_price)}
                                            &nbsp;
                                            <span className="underline">
                                                đ
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
