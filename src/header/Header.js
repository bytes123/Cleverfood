import React,{useState,useEffect} from 'react'
import './header.css'
import Logo from './components/Logo'
import HomeMenu from './components/HomeMenu'
import MiniMenu from './components/MiniMenu'
import  Login  from '../login/Login'
import { homeMenu,miniMenu } from '../data'
import api from '../data'
import Cookies from 'js-cookie'
export default function Header({
    isChange,
    cartTotalPrice,
    isNotValid,
    setIsNotValid,
    isEnable,
    handleIsEnable,
    handleDisable,
    setIsChange,
    isSubmitted,
    setIsSubmitted,
    }) {

    const [offset, setOffset] = useState(0);
    const [account,setAccount] = useState([])
    const [user,setUser] = useState(Cookies.get('user') ?? null);
    const {apiAccount} = api;
    const axios = require('axios').default;

    const fetchAccount = async() => {

        const formData = new FormData();
        formData.append("user_id",Cookies.get("user_id"))
        const data = await axios.post(apiAccount,formData);
        setAccount(...data.data);
    }

    useEffect(() => {
        if(Cookies.get('user_id')) {
            fetchAccount();
        }  
    },[Cookies.get('user_id')])

   
    const handleOffset = () => {
        setOffset(window.pageYOffset)
    }
     
    
   window.addEventListener('scroll', handleOffset);
    
    return (
        <header className={offset > 125 ? 'header dropdown-header' :  offset === 0 ? 'header' : 'header dropdown-header'} >
            <div className="header-wrapper" >
                <div className="header-content container"> 
                    <Logo />
                    <HomeMenu homeMenu={homeMenu}/>
                    <MiniMenu 
                    miniMenu={miniMenu} 
                    cartTotalPrice={cartTotalPrice} 
                    isEnable={isEnable} 
                    user={account}
                    setUser={setUser}
                    handleIsEnable={handleIsEnable}
                    isChange={isChange}
                    setIsChange={setIsChange}
                    />
                </div>
            </div>
            <Login 
            setIsSubmitted={setIsSubmitted}
            isEnable={isEnable} 
            setUser={setUser}
            handleDisable={handleDisable}
            isNotValid={isNotValid}
            setIsNotValid={setIsNotValid}
            />
        </header>
    )
}
