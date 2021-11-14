import React,{ useState,useLayoutEffect } from "react"
import DeleteBtn from '../../commonComponents/DeleteBtn'
import {Link} from 'react-router-dom'
import api from "../../data"
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ReactBootstrap from 'react-bootstrap'

export default function CartProductItems({
    product_id = 1,
    product_name = 'Dưa hấu',
    product_meta,
    product_price = 339000,
    product_image = 'https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/product-22-470x470.jpg',
    formatNumber,
    amountProduct,
    setIsChange
    }) {
        const axios = require('axios').default;
        const {apiDeleteProduct} = api
        const [loading,setLoading] = useState(false);

     

        const handleDelete = async () => {
            try {
                setLoading(true);
                const data = new FormData();
                data.append('product_id',product_id)
                data.append('user_id',Cookies.get('user_id'))
                const amount = await axios.post(apiDeleteProduct,data) 
                setTimeout(async () => {  
                    await setLoading(false);
                    await toast.error('Xóa thành công!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }) 
                    setIsChange(amount)
                },1000)
          
            } catch(error) {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    toast.warning('Xóa thất bại!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                },1000)
            
            }
        }

        

        
        



    return (
        <li className="product-item ">
                    <div className="product-item-wrapper">
                        {
                            loading && 
                            <div className="product-item-spinner" style={{position: 'absolute'}}>
                                <ReactBootstrap.Spinner animation="border" variant="danger" />
                            </div>
                        }
                            <div className="product-item-img">
                                <img alt={product_name} src={product_image}/>
                            </div>
                            <div className="product-item-infor p-x-2">
                                <p className="product-item-name">
                                    <Link to={`/cleverfood/san-pham/${product_id}`} className="product-item-name-link">
                                        {product_name}
                                    </Link>
                                </p>
                                <div className="product-item-quantity">
                                    {amountProduct} x
                                    <span className="product-item-price"> {product_price && formatNumber(product_price)}&nbsp; 
                                        <span className="product-item-unit unit">
                                            đ
                                        </span>
                                    </span>
                                </div>
                            </div>
                    </div>
                    <DeleteBtn onDelete={handleDelete}/>
        </li>
    )
}
