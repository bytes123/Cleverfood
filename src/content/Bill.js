import React,{useState,useEffect,useRef,useMemo} from 'react'
import {useParams,Redirect,Link,useHistory} from 'react-router-dom'
import api from '../data';
import Cookies from 'js-cookie'
import BigButton from '../commonComponents/BigButton'
import formatNumber from '../functions/formatNumber'
import useLoading from '../useLoading'
import "./bill.css";
import { Code } from 'react-content-loader'

export default function Bill() {

    const [newBill,setNewBill] = useState([]);
    const axios = require('axios').default;
    const history = useHistory();
    const {apiGetBill} = api
    const {isVisible,newDataLength,lastItem,setDataLength,infiniteScroll} = useLoading()

    
    const MyCodeLoader = () => <Code height="10rem"/>

   

    const fetchBill = async () => {
        const newData = new FormData();
        newData.append("account_id",Cookies.get("user_id"))
        const data = await axios.post(apiGetBill,newData)
        setDataLength(data.data.length)
        setNewBill(data.data.filter((item,index) => index < newDataLength && item))

    }

   

    window.onscroll = () => {
        infiniteScroll()          
    }
    
    useEffect(() => {
        if(Cookies.get('user_id')) {
            fetchBill();
            
        }
    },[newDataLength])

    
    

    

 
   
    return (
        <div className="bill_history-wrapper">
            <div className="bill_history container">
                <div className="bill_heading">
                    <h1 className="bill_header">
                        THÔNG TIN ĐƠN MUA
                    </h1>
                </div>
                <ul className="bill_history-list">
                    {   
                        newBill.length > 0 &&
                        newBill.map((item,index) => 
                            
                            (
                                <li className="bill_item" 
                                ref={lastItem}
                                key={index}                       
                                >
                                    <div className="bill_item-infor">
                                        <div className="bill_item-img">
                                            <img src={item.product_image} alt="" />
                                        </div>
                                        <div className="bill_item-detail">
                                        <div className="bill_item-id">
                                            <p>
                                                Mã đơn: #{item.bill_id}
                                            </p>
                                        </div>
                                        <div className="bill_item-name">
                                            <h2>
                                                {item.product_name}
                                            </h2>
                                        </div>
                                        <div className="bill_item-amount">
                                            <p>
                                                x{item.amount_products}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bill_item-price">
                                        <span className="unit">
                                            đ
                                        </span>
                                        <span className="price">
                                            {formatNumber(item.product_price)}
                                        </span>
                                    </div>
                                    </div>
                                    <div className="bill_item-total-price">
                                        <p>
                                Tổng số tiền:
                                &nbsp;
                                <span className="unit">
                                    đ
                                </span>
                                <span className="big-price">
                                    {formatNumber(item.products_price)}
                                </span>
                                        </p>
                                    </div>
                                    <div className="bill_item-btn">
                                        <BigButton
                                            width="20rem"
                                            btnStyle="success"
                                            text="Mua lại"
                                            fontSize="2rem"
                                            link={`/cleverfood/san-pham/${item.product_id}`}
                                        />
                                    </div>
                                </li>
                            )
                        )
                    }
                    <div className="bill_loading">
                        {isVisible && MyCodeLoader()}
                    </div>
                </ul>
            </div>
        </div>
    )
}
