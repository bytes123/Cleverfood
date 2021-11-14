import React,{useEffect,useState} from 'react'
import "./register.css"
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import {useHistory} from 'react-router-dom'
import api from '../data'

export default function Register({
    handleIsEnable,
    isSubmitted,
    setIsSubmitted
    }) {    
    const axios = require('axios').default;
    const {apiSignUp} = api
    const history = useHistory();
  
    const [isLoading,setIsLoading] = useState(false)
    const [selected,setSelected] = useState("An Giang")

    const handleProvince = (e) => {
        setSelected(e.target.value)

    }

    const submitForm = async(values) => {
        const {fullname,user,email,password,address} = values;
        setIsLoading(true)
        const data = new FormData();
        data.append("full_name",fullname);
        data.append("user_name",user);
        data.append("email",email);
        data.append("province",selected);
        data.append("address",address);
        data.append("password",password);
        const signup = await axios.post(apiSignUp,data);
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(true);
        }, 2000)
        
    }

  
    useEffect(() => {
        window.scrollTo(0, 0);
    },[history.location.pathname])

    return (
        <div className="register_wrapper">
            <div className="register container">
                <div className="register_form-wrapper">
                    {!isSubmitted ? <FormSignup
                    onProvince={handleProvince}
                    selected={selected}
                     submitForm={submitForm} 
                     isLoading={isLoading}/> : 
                     <FormSuccess handleIsEnable={handleIsEnable}/>}
                </div>
            </div>
        </div>
    )
}
