import React,{ useState,useEffect,useRef,useMemo }from 'react'
import {useHistory,Link} from 'react-router-dom'
import api from '../data';
import Cookies from 'js-cookie'
import Table from '../commonComponents/Table'
import useTotal from '../useTotal';
import BigButton from '../commonComponents/BigButton'
import useDate from './useDate';
import { toast } from 'react-toastify';
import Spinner from '../Spinner'
import formatNumber from '../functions/formatNumber'
import {AiFillTag} from 'react-icons/ai'
import data, {shipperSelection} from '../data'



export default function MainCart({
    isChange,
    setIsChange,
    mainCartLoading,
    setMainCartLoading
}) {
    const axios = require('axios').default;
    const [cart,setCart] = useState([])
    const [newCart,setNewCart] = useState([])
    const {apiAccount,apiCart,apiDeleteProduct,apiUpdateCart,apiInsertBill} = api
    const {amountProduct} = useTotal(cart)
    const updateForm = useRef({});
    const {dateTime} = useDate();
    const [loading,setLoading] = useState(false);
    const [tableLoading,setTableLoading] = useState(false);
    const history = useHistory()
    const [totalPrice,setTotalPrice] = useState(formatNumber(cart.reduce((total, item) => Number(item.product_price) + total, 0)))
    const [account,setAccount] = useState([])
    const [address,setAddress] = useState()
    const [isPayment,setIsPayment] = useState(false)
    const [checked,setChecked] = useState(1)
    const [billId,setBillId] = useState();
    const shipper = useRef()
    
    const fetchAccount = async() => {

        const formData = new FormData();
        formData.append("user_id",Cookies.get("user_id"))
        const data = await axios.post(apiAccount,formData);
        setAccount(...data.data);
    }

  

    const fetchData = async () => {   
        try {
            const data = new FormData()
            data.append("user_id",Cookies.get("user_id"))
            const cart = await axios.post(apiCart,data);
            setCart(cart.data);
            setTimeout(() => {
                setMainCartLoading(false);
            },1000)
        } catch(error) {
            setCart([])
            setTimeout(() =>{
                setMainCartLoading(false);     
            },1000)
        }
    }

    const handleDelete = async (e,product_id) => {
        e.preventDefault();
        try {
            setTableLoading(true);
            setTimeout(async () => {  
                const data = new FormData();
                data.append('product_id',product_id)
                data.append('user_id',Cookies.get('user_id'))
                const amount = await axios.post(apiDeleteProduct,data) 
                setTableLoading(false);
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
            },500)
      
        } catch(error) {
            setTableLoading(true);
            setTimeout(() => {
                setLoading(false);
                setTableLoading(false);
                toast.warning('Xóa thất bại!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            },500)
        
        }
    }

    const insertBill = async() => {
        const detailsBill = () => {
            newCart.forEach((item) => {
                item['amount_products'] = amountProduct[item.product_id]
                item['products_price'] = amountProduct[item.product_id] * item.product_price
            })
            return newCart
        }
        const newData = new FormData();
        newData.append("account_id",Cookies.get("user_id"));
        newData.append("bill_price",cart.reduce((total, item) => Number(item.product_price) + total, 0))
        newData.append("create_date",dateTime)
        newData.append("bill_address",address)
        newData.append("bill_shipper",shipper.current.value)
        newData.append("products",JSON.stringify(detailsBill()))   
        const data = await axios.post(apiInsertBill,newData)
        setBillId(data.data)
    }

    const deleteCart = () => {
        const newData = new FormData();
        cart.forEach(async(item) => {
            newData.append("cart_id",item.cart_id);
            const data = await axios.post(apiDeleteProduct,newData)
        })
    }

    const successToast = () => {
        setTableLoading(false);
                toast.success('Thanh toán thành công!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                },500) 
    }

    const handlePayment = async() => {
        setTableLoading(true);
        await insertBill();
        await deleteCart();
        setTimeout(() => {
            setTableLoading(false);
            successToast();
            setIsPayment(true); 
            setIsChange(Math.random())
        },1000)
    }

    const handleUpdate = async(e) => {  
        
        const form = new FormData(updateForm.current)
        const newData = Object.fromEntries(form);
        newCart.forEach(async(cart) => {      
            if(newCart.every((cart) => +newData[cart.product_id] >= 0)) {
                if(amountProduct[cart.product_id] > +newData[cart.product_id]) {
                    const data = new FormData()
                    e.preventDefault();
                    setTableLoading(true);
                    data.append("user_id",Cookies.get("user_id"))
                    data.append("product_id",cart.product_id)
                    data.append("delLength",amountProduct[cart.product_id] - +newData[cart.product_id])
                    console.log(...data)
                    const del = await axios.post(apiUpdateCart,data) 
                   setTimeout(() => {
                        setIsChange(del);
                        setTableLoading(false);     
                    },1000)   
                }else if(+newData[cart.product_id] > amountProduct[cart.product_id]) {
                    e.preventDefault();
                    setTableLoading(true);
                    const data = new FormData()
                    data.append("user_id",Cookies.get("user_id"))
                    data.append("create_date",dateTime) 
                    data.append("product_id",cart.product_id)
                    data.append("plusLength",+newData[cart.product_id] - amountProduct[cart.product_id])
                    console.log(...data)
                    const plus = await axios.post(apiUpdateCart,data)
                    setTimeout(() => {
                        setIsChange(plus);   
                        setTableLoading(false);    
                    },1000)
                } else {
                    setTableLoading(true);
                    e.preventDefault();
                    await setTimeout(() => {
                        setTableLoading(false);    
                    },1000)
                }
            }
        })

        if(newCart.some((cart) => +newData[cart.product_id] < 0) ) {
            return;
        } else {
            setTimeout(() => {
                toast.success('Cập nhật thành công!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })   
            },700) 
        }

            
        
            
           
       

       
    }

    const handleShipper = (id) => {
        setChecked(id)
    }

    useEffect(() => {
        setAddress(account.account_address+" , "+account.account_province)
    },[account])
    
    useEffect(() => {
        setTotalPrice(formatNumber(cart.reduce((total, item) => Number(item.product_price) + total, 0)))
    },[cart,totalPrice])

    useEffect(() => {
        if(Cookies.get('user_id')) {
            fetchAccount();
        }  
    },[])

    useEffect(() => {
        setNewCart([...new Map(cart.map(item =>
            [item["product_id"], item])).values()])
    },[cart])


    useEffect(() => {
        fetchData();    
    },[Cookies.get("user_id"),isChange,isPayment])

    useEffect(() => {
        setMainCartLoading(true);
        setTimeout(() => {
            setMainCartLoading(false);
        },1000)
    },[])

    useEffect(() => {
        window.scrollTo(0,0);
    },[history.location.pathname])

   
   
    return (        
        <div className="main_cart-wrapper">
            {
                isPayment ?
                <div className="bill_success next-form container">
                    <p>
                        Hoàn thành
                    </p>
                    <p>
                        Mã đơn hàng của bạn là: #{billId}
                    </p>
                    <BigButton
                        width="40rem"
                        link="/cleverfood/cua-hang"
                        btnStyle="success"
                        text="MUA TIẾP"
                        fontSize="2rem"
                        />                    
                </div> :
                <div className="main_cart container">
                
                {
                    Cookies.get('user_id') ?
                    newCart.length > 0 ?
                    <div className="main_cart-list row" style={{position: 'relative'}}>
                        {tableLoading && <Spinner/>}
                        <div className="main_cart-left col-7">
                            <form ref={updateForm}>
                                <Table
                                isChange={isChange}
                                 onDelete={handleDelete} 
                                 amountProduct={amountProduct}
                                isChange={isChange} listTable={newCart}
                                formatNumber={formatNumber}
                                onDelete={handleDelete}
                                />
                                <div className="main_cart-submit">
                                    {loading && <Spinner/>}
                                    <BigButton 
                                    width="100%" 
                                    fontSize="1.6rem" 
                                    type="submit" 
                                    btnStyle="primary-green food_content-btn" margin="0" text="CẬP NHẬT GIỎ HÀNG"
                                    onClick={handleUpdate}/>
                                </div>
                            </form>
                        </div>
                        <div className="main_cart-right col-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ĐƠN HÀNG</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr className="b-b">
                                        <td className="bill-wrapper">
                                            <div className="bill">
                                                <div className="bill_product-header py-10">
                                                <h3>
                                                    Sản phẩm:
                                                </h3>
                                            </div>
                                                <ul className="bill_product-list">
                                                    {
                                                        newCart.map((item) => {
                                                            return (
                                                            <li className="bill_product-item py-10">
                                                                <h4>
                                                                {item.product_name}
                                                                &nbsp;
                                                                <span>
                                                                    x{amountProduct[item.product_id]}
                                                                </span>
                                                                </h4>   
                                                                <p className="price d-flex">
                                                                    {formatNumber(item.product_price*amountProduct[item.product_id])}
                                                                    <p className="unit">
                                                                        đ
                                                                    </p>
                                                                </p>
                                                            </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="b-b">
                                        <td className="cart-flex">
                                            <h3>
                                                Giao hàng
                                            </h3>
                                            <div className="cart-address-wrapper">
                                                <div className="t-m">
                                                    Giao hàng miễn phí
                                                </div>
                                                <div className="t-m py-10">
                                                Ước tính cho &nbsp;
                                                <b>{address && address}</b>,
                                                </div>
                                                <div className="t-m">
                                                    Đổi địa chỉ
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="b-b">
                                        <h3 className="shipper-header">
                                            Hình thức giao hàng
                                        </h3>
                                        <div className="form_shipper">   
                                            {
                                                shipperSelection.map((item) => {
                                                    return (
                                                        <>
                                                            <div className={`${item.name}-shipper`} onChange={(e) => handleShipper(item.id)}>
                                                                <input 
                                                                type="radio" 
                                                                name={item.name} 
                                                                checked={checked === item.id}
                                                                ref={checked === item.id ? shipper : null}
                                                                value={item.text}
                                                                />
                                                                <label onClick={(e) => handleShipper(item.id)} htmlFor={item.name}>{item.text}</label> 
                                                            </div>   
                                                        </>
                                                    )
                                                })
                                            }  
                                            <div className={`atm-method ${checked == 2 ? "visible" : ""}`}>
                                                Sau khi tiến hành thanh toán chúng tôi sẽ gửi cho bạn mã đơn hàng và bạn hãy chuyển khoản kèm nội dung là mã đơn hàng . Sau khi đã nhận được tiền chúng tôi sẽ tiến hành gửi hàng.
                                                <br />
                                                <b>STK</b>: 9196747 <br />
                                                <b>Chủ TK</b>: Dao Tri Minh Tan <br />
                                                <b>Ngân hàng</b>: Quân đội(MB Bank) <br />
                                            </div>                                        
                                        </div>
                                    </tr>
                                    <tr className="b-b">
                                        <td className="cart-flex">
                                            <h3>
                                                TỔNG
                                            </h3>
                                            <span className="price">
                                                {totalPrice}
                                                <span className="unit">
                                                    đ
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="cart_payment-btn">  
                                                <BigButton 
                                                    text="TIẾN HÀNH THANH TOÁN"
                                                    btnStyle="checkout"
                                                    width="100%"
                                                    onClick={handlePayment}
                                                />
                                            </div>
                                            <div className="cart_payment-code">
                                                <div className="cart_payment-code-heading b-b">
                                                    <span>
                                                    <AiFillTag/>    
                                                    </span>
                                                    <h3>
                                                        Phiếu ưu đãi
                                                    </h3>
                                                </div>
                                                <div className="cart_payment-code-input py-10">
                                                    <input type="text" placeholder="Mã ưu đãi" className="py-10"/>
                                                </div>
                                                <div className="cart_payment-code-submit py-10">
                                                <BigButton
                                                    text="Áp dụng"
                                                    btnStyle="default"
                                                    width="100%"
                                                />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                    </div>
                    : 
                    !isPayment &&
                    <div className="main_cart-empty next-form ">
                        <p>
                            GIỎ HÀNG RỖNG
                        </p>
                        <BigButton
                        width="40rem"
                        link="/cleverfood/cua-hang"
                        btnStyle="success"
                        text="MUA NGAY"
                        fontSize="2rem"
                        />
                    </div>
                    : <div className="main_cart-login-required next-form ">
                        <p>
                            Vui lòng đăng nhập 
                        </p>
                        <BigButton
                        width="40rem"
                        link="/cleverfood/cua-hang"
                        btnStyle="success"
                        text="ĐĂNG NHẬP NGAY"
                        fontSize="2rem"
                        />
                    </div>
                }
            </div>
            }
        </div>
    )
}
