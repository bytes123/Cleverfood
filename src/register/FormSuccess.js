import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import BigButton from '../commonComponents/BigButton'

export default function FormSuccess({
    handleIsEnable
    }) {
    return (
        <div className="form_success">
            <div className="form_success-logo">
                <AiFillCheckCircle style={{fontSize: "10rem",color: "var(--primary-text-color)"}}/>
            </div>  
            <div className="form_success-heading">
                <h2 className="form_sucess-header">
                    Đăng ký thành công
                </h2>
            </div>
            <div className="form_success-login">
                <BigButton text="ĐĂNG NHẬP NGAY" type="primary-green" onClick={handleIsEnable}/>
            </div>
        </div>
    )
}
