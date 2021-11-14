import React,{useState} from 'react'
import useRegister from './useRegister'
import Spinner from '../Spinner'
import validate from './validate'
import BigButton from '../commonComponents/BigButton'

export default function FormSignup({
    submitForm,
    isLoading,
    onProvince,
    selected
    }) {

        const {handleChange,handleSubmit,values,errors} = useRegister(submitForm,validate)


    return (
        <form className="register_form" onSubmit={handleSubmit}>
            <div className="register_heading">
                        <h3 className="register_header">
                            Tạo tài khoản Cleverfood
                        </h3>
                        <p className="register_intro my-40">
                            Tiếp tục tới CleverFood
                        </p>
            </div>
            <div className="register_name my-20">
                        <div className="register_name-label-wrapper">
                            <label htmlFor="" className="register_name-label">
                                Họ và tên
                            </label>
                        </div>
                        <input  type="text" name="fullname" 
                        className={`register_name-input ${ errors.fullname ? "error-border" : ""}`}
                        placeholder="Nhập họ và tên"
                                value={values.fullname}
                                onChange={handleChange}
                        />
                        {
                            errors.fullname &&
                            <p className="error">{errors.fullname}</p>
                        }
            </div>
            <div className="register_user my-20">
                        <div className="register_user-label-wrapper">
                            <label htmlFor="" className="register_user-label">
                                Tên đăng nhập
                            </label>
                        </div>
                        <input  type="text" name="user"  className={`register_user-input ${ errors.user ? "error-border" : ""}`} placeholder="Nhập tên đăng nhập"
                                 value={values.user}
                                 onChange={handleChange}
                        />
                        {
                            errors.user &&
                            <p className="error">{errors.user}</p>
                        }
            </div>
            <div className="register_mail my-20">
                        <div className="register_mail-label-wrapper">
                            <label htmlFor="" className="register_mail-label">
                                Email
                            </label>
                        </div>
                        <input  type="text" name="email"  className={`register_mail-input ${ errors.email ? "error-border" : ""}`} placeholder="Nhập email"
                                 value={values.email}
                                 onChange={handleChange}
                        />
                          {
                            errors.email &&
                            <p className="error">{errors.email}</p>
                        }
            </div>
            <div className="register-province my-20">
                <div className="register_province-label-wrapper">
                    <label htmlFor="" className="register_province-label">
                        Nơi sinh sống
                    </label>
                </div>
                <select 
                onChange={onProvince}
                value={selected}
                className="register_province-selection mt-10">
                    <option value="An Giang">An Giang </option>
                    <option value="Bà Rịa - Vũng Tàu ">Bà Rịa - Vũng Tàu</option>
                    <option value="Bắc Giang">Bắc Giang </option>
                    <option value="Bắc Kạn">Bắc Kạn </option>
                    <option value="Bạc Liêu">Bạc Liêu </option>
                    <option value="Bắc Ninh">Bắc Ninh </option>
                    <option value="Bến Tre">Bến Tre </option>
                    <option value="Bình Định">Bình Định </option>
                    <option value="Bình Dương">Bình Dương</option> 
                    <option value="Bình Phước">Bình Phước </option>
                    <option value="Bình Thuận">Bình Thuận </option>
                    <option value="Bình Thuận">Bình Thuận </option>
                    <option value="Cà Mau">Cà Mau </option>
                    <option value="Cao Bằng">Cao Bằng </option>
                    <option value="Đắk Lắk">Đắk Lắk </option>
                    <option value="Đắk Nông">Đắk Nông </option>
                    <option value="Điện Biên">Điện Biên </option>
                    <option value="Đồng Nai">Đồng Nai </option>
                    <option value="Đồng Tháp">Đồng Tháp </option>
                    <option value="Đồng Tháp">Đồng Tháp </option>
                    <option value="Gia Lai">Gia Lai </option>
                    <option value="Hà Giang">Hà Giang </option>
                    <option value="Hà Nam">Hà Nam </option>
                    <option value="Hà Tĩnh">Hà Tĩnh </option>
                    <option value="Hải Dương">Hải Dương </option>
                    <option value="Hậu Giang">Hậu Giang </option>
                    <option value="Hòa Bình">Hòa Bình </option>
                    <option value="Hưng Yên">Hưng Yên </option>
                    <option value="Khánh Hòa">Khánh Hòa </option>
                    <option value="Kiên Giang">Kiên Giang </option>
                    <option value="Kon Tum">Kon Tum </option>
                    <option value="Lai Châu">Lai Châu </option>
                    <option value="Lâm Đồng">Lâm Đồng </option>
                    <option value="Lạng Sơn">Lạng Sơn </option>
                    <option value="Lào Cai">Lào Cai </option>
                    <option value="Long An">Long An </option>
                    <option value="Nam Định">Nam Định </option>
                    <option value="Nghệ An">Nghệ An </option>
                    <option value="Ninh Bình">Ninh Bình </option>
                    <option value="Ninh Thuận">Ninh Thuận </option>
                    <option value="Phú Thọ">Phú Thọ </option>
                    <option value="Quảng Bình">Quảng Bình </option>
                    <option value="Quảng Bình">Quảng Bình </option>
                    <option value="Quảng Ngãi">Quảng Ngãi </option>
                    <option value="Quảng Ninh">Quảng Ninh </option>
                    <option value="Quảng Trị">Quảng Trị </option>
                    <option value="Sóc Trăng">Sóc Trăng </option>
                    <option value="Sơn La">Sơn La </option>
                    <option value="Tây Ninh">Tây Ninh </option>
                    <option value="Thái Bình">Thái Bình </option>
                    <option value="Thái Nguyên">Thái Nguyên </option>
                    <option value="Thanh Hóa">Thanh Hóa </option>
                    <option value="Thừa Thiên Huế">Thừa  Thiên Huế</option>
                    <option value="Tiền Giang">Tiền Giang </option>
                    <option value="Trà Vinh">Trà Vinh </option>
                    <option value="Tuyên Quang">Tuyên Quang </option>
                    <option value="Vĩnh Long">Vĩnh Long </option>
                    <option value="Vĩnh Phúc">Vĩnh Phúc </option>
                    <option value="Yên Bái">Yên Bái </option>
                    <option value="Phú Yên">Phú Yên </option>
                    <option value="Tp.Cần Thơ">Tp .Cần Thơ</option>
                    <option value="Tp.Đà Nẵng">Tp .Đà Nẵng</option>
                    <option value="Tp.Hải Phòng">Tp .Hải Phòng</option>
                    <option value="Tp.Hà Nội">Tp .Hà Nội</option>
                    <option value="TP  HCM">TP HCM </option>
                </select>
            </div>
            <div className="register_address-my-20">
                <div className="register_address-label-wrapper">
                    <label htmlFor="" className="register_address-label">
                        Địa chỉ
                    </label>
                </div>
                <input  
                type="text" 
                name="address"  
                className=
                {`register_mail-input ${ errors.address ? "error-border" : ""}`} placeholder="Nhập địa chỉ"
                value={values.address}
                onChange={handleChange}
                />
                    {
                    errors.address &&
                    <p className="error">{errors.address}</p>
                }
            </div>
            <div className="register_password my-20">
                        <div className="register_password-label-wrapper">
                            <label htmlFor="" className="register_password-label">
                                Mật khẩu
                            </label>
                        </div>
                        <input  type="password" name="password"  className={`register_password-input ${ errors.password ? "error-border" : ""}`} placeholder="Nhập mật khẩu"
                                 value={values.password}
                                 onChange={handleChange}
                        />
                          {
                            errors.password &&
                            <p className="error">{errors.password}</p>
                        }
            </div>
            <div className="register_password-confirm my-20">
                        <div className="register_password-confirm-label-wrapper">
                            <label htmlFor="" className="register_password-confirm-label">
                                Xác nhận mật khẩu
                            </label>
                        </div>
                        <input  type="password" name="confirmPassword"  className={`register_password-input ${ errors.confirmPassword ? "error-border" : ""}`} placeholder="Xác nhận mật khẩu"
                                 value={values.confirmPassword}
                                 onChange={handleChange}
                        />
                          {
                            errors.confirmPassword &&
                            <p className="error">{errors.confirmPassword}</p>
                        }
            </div>
            <div className="register_button my-20">
                        <BigButton
                        type="submit"
                        text="ĐĂNG KÝ"
                        btnStyle="primary-green"
                        />
            </div>
            {
                isLoading && 
                <Spinner style={{fontSize: "3rem"}}/>
            }
        </form>   
            
             

    )
}
