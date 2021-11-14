import {useState,useEffect} from 'react'
import api from '../data'


const useRegister = (callback,validate) => {
  
    const axios = require('axios').default;
    const {apiCheckUser} = api
    const [values, setValues] = useState({
        fullname: '',
        user: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
    })

    const [accounts,setAccounts] = useState([])

    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false);



    const fetchUser = async () => {
        const data = await axios.get(apiCheckUser)
        setAccounts(data.data)
    }

    const clearErrors = (name) => {
        setErrors({
            ...errors,
            [name]: ""
        })
    }

    const newValues = (name,value) => {
        setValues({
            ...values,
            [name]: value,
        })
    }
    
    const handleChange = e => {
        const {name, value} = e.target
        clearErrors(name)
        newValues(name,value)    
        if(name == "user") {
            if(accounts.some((item) => item.account_user === value)) {
                
                setErrors({
                    ...errors,
                    [name]: "Tài khoản đã tồn tại"
                })
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                })
            }
        }
    

    }

  


    
   


    const handleSubmit = e => {


        
        e.preventDefault()
        setErrors(validate(values,accounts))
        setIsSubmitting(true)

       
    }

    useEffect(() => {
        fetchUser()
    },[])

    useEffect(() => {
        // console.log(Object.keys(errors).length)
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback(values)
        }  
    },[errors])

    return { values,handleSubmit,handleChange, errors}
}

export default useRegister