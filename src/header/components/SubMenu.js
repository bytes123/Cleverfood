import React,{useState,useEffect} from 'react'
import SubMenuItem from './SubMenuItem';
import CartProductList from './CartProductList'
import api from '../../data';
import BigButton from '../../commonComponents/BigButton'
import Cookies from 'js-cookie'
import {Link,useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SubMenu({
    languages,
    subList,
    totalText,
    buttons,
    contentEmpty,
    user,
    link,
    setUser,
    isCart,
    isChange,
    setIsChange,
    setCartLength
    }) {

      
    const [cartTotalPrice,setcartTotalPrice] = useState(0);
    const axios = require('axios').default;
    const {apiCart,apiCatalog} = api
    const [cart,setCart] = useState([])
    const [catalog,setCatalog] = useState([]);
    const history = useHistory()
   

    const fetchData = async () => {     
        try {
            const data = new FormData()
            data.append("user_id",Cookies.get("user_id"))
            const carts = await axios.post(apiCart,data);
            setCart(carts.data);
        } catch(error) {
            setCart([])
        }
    }

    const fetchCatalog = async () => {
        try {
            const data = await axios.get(apiCatalog);
            if(data.data) {
                await setCatalog(data.data);  
            } else {
                // LỖI KẾT NỐI
            }
            
    
        } catch(error) {
            setCatalog([])
        }
      } 



    useEffect(() => {
        fetchData();
        
    },[Cookies.get("user_id"),isChange])
    
    useEffect(() => {
        fetchCatalog();
    },[])


    const logOut = () => {
        setTimeout(() => {
            setUser("");
            Cookies.remove('user')
            Cookies.remove('user_id')
            history.push("/cleverfood")
            setIsChange(Math.random())
        },200)
        toast.error('Đăng xuất thành công!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }) 
    }
   

    
    return (
        <div className="sub_menu">
            <div className="arrow-wrapper wrap">
                <div className="arrow-up"></div>

            </div>
            <div className="arrow-wrapper">
                <div className="arrow-up "></div>
            </div>
            <ul className="sub_menu-list">
                {languages && 
                    languages.map((item,index) => {
                        const {id,language,icon,link} = item;
                            return (
                                language && 
                                    <SubMenuItem {...item} key={index}/> 
                            )
                        })           
                }
                {
                    user && 
                    <>
                        <div className="sub_user-wrapper">
                            <p className="sub_user">{user.account_fullname}</p>
                        </div>
                        <div className="sub_bill-history">
                            <Link to="/cleverfood/tai-khoan/don-mua">
                                Lịch sử đơn hàng
                            </Link>
                        </div>
                        <div className="sub_user-logout">
                            <BigButton btnStyle="warning" text="ĐĂNG XUẤT" onClick={logOut}/>
                        </div>
                    </>
                }
                {isCart &&
                    <CartProductList 
                    setCartLength={setCartLength}
                    cart={cart} 
                    totalText={totalText} 
                    link={link} 
                    buttons={buttons} 
                    cartTotalPrice={cartTotalPrice}
                    isChange={isChange}
                    setIsChange={setIsChange}
                    />           
                }
                {
                    cart.length === 0 && 
                    <div className="none-product-wrapper">
                        <span className="none-product">{contentEmpty}</span>
                    </div>
                }
                {catalog && subList && 
                        catalog.map((item,index) => {
                            return (
                                <SubMenuItem {...item} key={index}/>
                            )
                        })
                }
            </ul>
        </div> 
    )
}
