import React,{useRef,useState,useEffect} from 'react'
import BigButton from '../../commonComponents/BigButton'
import api from '../../data'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ReactBootstrap from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'

export default function LoginForm({
    handleDisable,
    setUser,
    isNotValid,
    setIsNotValid,
    setIsSubmitted,
    }) {
        

    const {apiLogin} = api
    const userInput = useRef()
    const passwordInput = useRef()
    const axios = require('axios').default;
    const [isError,setIsError] = useState(false)
    const [loading,setLoading] = useState(false);
    const history = useHistory();

    const resetInput = () => {
        userInput.current.value = "";
        passwordInput.current.value = "";
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("user",userInput.current.value)
        data.append("password",passwordInput.current.value)
        try {
            setLoading(true);
            const response = await axios.post(apiLogin, data)
            if(response.data.length > 0) {
                setTimeout(() => {
                    setLoading(false);
                    setTimeout(() => {
                        const {account_user,account_id} = response.data[0];
                        Cookies.set('user', account_user, { expires: 7 });
                        Cookies.set('user_id', account_id, { expires: 7 });
                        setUser(Cookies.get('user'))   
                        resetInput();
                    },200)
                    handleDisable();
                    toast.success('Đăng nhập thành công!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }) 
                    history.push("/cleverfood")
                    
                    
                },2000)
            } else {
                setTimeout(() => {
                    setLoading(false);
                    setIsNotValid(true)
                    resetInput()
                },2000)
            }
        }  catch {
            setLoading(true);
            setTimeout(() => {
                setIsError(true)
                toast.warning('Đăng nhập thất bại!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }) 
                setLoading(false)
            },2000)
        }
    }

    const moveSignUp = (e) => {
        setIsSubmitted(false)
        handleDisable()
    }
   
    

    return (
        <div className="login_form-wrapper">
            <form action="" className="login_form">
                <div className="login_form-heading py-10">
                    <h2 className="login_form-header">
                        Đăng nhập
                    </h2>
                </div>
                <div className="login_form-user-wrapper py-10">
                    <p className="login_form-user-label">
                        Tên tài khoản 
                    </p>
                    <input  
                    ref={userInput} 
                    name="user" 
                    type="text" 
                    className="login_form-user-input" 
                    onChange={(e) => setIsNotValid(false)}
                    {...(loading && {disabled: true})}
                    />
                </div>
                <div className="login_form-password-wrapper py-10">
                    <p name="password" className="login_form-password-label">
                        Mật khẩu
                    </p>
                    <input
                    ref={passwordInput} 
                    type="password" 
                    className="login_form-password-input" 
                    onChange={(e) => setIsNotValid(false)}
                    {...(loading && {disabled: true})}
                    />
                </div>
                <div className="login_form-register-wrapper">
                    <span style={{fontSize: "1.4rem"}}>
                        Chưa có tài khoản? &nbsp;
                    </span>
                    <Link to="/dang-ky" 
                    className="login_form-register-link"
                    onClick={handleDisable}
                    onClick={moveSignUp}
                    >
                        Đăng ký ngay
                    </Link>
                </div>
                {
                    isNotValid && 
                    <div className="login_form-warning-wrapper py-10">
                        <p name="password" className="login_form-warning-label">
                            Sai tài khoản hoặc mật khẩu
                        </p>
                    </div>
                }
                {
                    isError && 
                    <div className="login_form-warning-wrapper py-10">
                        <p name="password" className="login_form-warning-label">
                            Lỗi kết nối đến cơ sở dữ liệu
                        </p>
                    </div>
                }
                <div className="login_form-btn-wrapper">
                    {
                        loading &&
                        <div className="spinner">
                            <ReactBootstrap.Spinner animation="border" variant="success" />
                        </div>
                    }
                    <BigButton
                    btnStyle="primary-green" 
                    position="relative" 
                    text="ĐĂNG NHẬP" 
                    fontSize="1.8rem" 
                    width="100%"
                    onClick={handleLogin}/>
                </div>
            </form>
        </div>
    )
}
