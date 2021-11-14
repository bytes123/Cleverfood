import React from 'react'
import ShipBannerList from './ShipBannerList'
import BigButton from '../../commonComponents/BigButton'
import  formatNumber  from '../../functions/formatNumber'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { typeList } from '../../data'
import Cookies from 'js-cookie'

export default function FoodInfor({
    product_price,
    product_name,
    quantity,
    loading,
    onDecreaseQuantity,
    onIncreaseQuantity,
    onBuy,
    onBuyCookie,
    onQuantityChange

    }) {
    return (
        <div className="food_content-item-infor">
            <div className="food_content-directory py-10">
                <Link to="/cleverfood" className="food_content-home-link" >
                    TRANG CHỦ 
                </Link>
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <Link to="/cleverfood/san-pham" className="food_content-home-link">
                    TRÁI CÂY
                </Link>
            </div>
            <div className="food_content-heading py-10">
                <h3 className="food_content-header">
                    {product_name}
                </h3>
            </div>
            <div className="food_content-price-wrapper py-10">
                <span className="food_content-price">
                    {formatNumber(Number(product_price))}
                </span>
                &nbsp;
                <span className="food_content-unit text-decoration-underline">
                    đ
                </span>
            </div>
            <div className="food_content-detail-wrapper py-10">
                <p className="food_content-detail">
                    <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. 
                    Vitae dignissimos odit delectus. Eos sit dolorum doloribus perferendis ea quo placeat?
                </p>
            </div>
            <div className="food_content-quantity-wrapper py-10">
                <form action="" className="food_content-quantity-form">
                    <div className="food_content-quantity-selection">
                          <span className="food_content-decrease" onClick={onDecreaseQuantity}>
                            -
                          </span>
                          <input 
                          name="amount" 
                          type="number" 
                          className="food_content-quantity" 
                          min="1" 
                          max="999" 
                          value={quantity}
                          onChange={onQuantityChange}
                          />
                          <span className="food_content-increase" onClick={onIncreaseQuantity}>
                            +
                          </span>
                    </div>
                    <div className="food_content-btn-wrapper">
                        {
                            loading &&
                            <div className="spinner">
                              <ReactBootstrap.Spinner animation="border" variant="success" />
                            </div>
                        }
                        <BigButton type="submit" btnStyle="primary-green food_content-btn" width="100%" margin="0" text="THÊM VÀO GIỎ" onClick={(e) => Cookies.get("user") ? onBuy(e) : onBuyCookie(e)}/>
                    </div>
                </form>
            </div>
            <div className="food_content-ship-wrapper">
                <div className="food_content-ship-heading row py-20">
                    <h3 className="food_content-header col-6">
                        Tính ship tự động
                    </h3>
                    <h3 className="food_content-header col-6">
                        Thanh toán
                    </h3>
                </div>
                <div className="food_content-ship-banner py-20">
                    <ShipBannerList/>
                </div>
            </div>
            <div className="food_content-category-list py-10">
                <span className="food_content-category-span">
                    Danh mục: 
                </span>
                {
                    typeList.map((categoryItem) => {
                        const {id,item,link} = categoryItem;
                        return (
                            <Link key={id} to={link} className="food_content-category-link">
                                {item}
                                {id !== typeList.length && ","}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
