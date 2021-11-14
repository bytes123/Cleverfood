import React,{useState,useEffect,memo} from 'react'
import Modal from "./components/Modal"
import LoginForm from "./components/LoginForm";
import './login.css'


function Login({
    isEnable,
    handleDisable,
    setUser,
    isNotValid,
    setIsNotValid,
    setIsSubmitted,
    }) {


    return (
        <div className={`login-wrapper ${isEnable ? "enable" : "disable"}`}>
            <div className="login">
                <Modal handleDisable={handleDisable}/>
                <LoginForm 
                 setIsSubmitted={setIsSubmitted}
                isEnable={isEnable}
                handleDisable={handleDisable} 
                setUser={setUser}
                isNotValid={isNotValid}
                setIsNotValid={setIsNotValid}
                />
            </div>
        </div>
    )
}
export default memo(Login)