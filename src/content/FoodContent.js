import React,{ useState,useEffect,useRef } from "react"
import api from '../data';
import { useParams } from 'react-router-dom';
import { Link,useHistory,Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import FoodInfor from './foodComponents/FoodInfor'
import BigButton from '../commonComponents/BigButton'
import Comment from "./foodComponents/Comment"
import {describeButtons,detailsDescription,rateStars} from "../data"
import Spinner from '../Spinner'
import useDate from "./useDate"
import useLoading from '../useLoading'

export default function FoodContent({
    setIsChange={setIsChange},
    handleIsEnable,
    setFoodPageLoading,
    foodPageLoading,
    
  }) {
    const axios = require('axios').default;
    const {apiProduct,apiInsertCart,apiComments,apiInsertComment} = api
    const { id } = useParams();
    const [product,setProduct] = useState({})
    const [errorPage,setErrorPage] = useState(false);
    const [quantity,setQuantity] = useState(1);
    const [loading,setLoading] = useState(false);
    const [slId,setSlId] = useState(1);

   
   

    const history = useHistory();
    const {dateTime} = useDate();
 
    

    const fetchData = async () => {
      setFoodPageLoading(true)
      try {
        const regex = new RegExp("^[0-9]*$")
          if(regex.test(id)) {
            let data = new FormData()
            data.append("product_id",id)
            const product = await axios.post(apiProduct,data);
            if(product.data.length > 0) {
              await setProduct(...product.data)
              setTimeout(() =>{
                setFoodPageLoading(false);
              },500)
            } else {
              setProduct({})
              await setErrorPage(true)
              setTimeout(() =>{
                setFoodPageLoading(false);
              },500)
            }
          } else {
              setTimeout(() =>{
                setErrorPage(true)
              }, 500)
             
             
          }
         
      } catch(error) {
        setProduct({})
        setTimeout(() =>{
          setFoodPageLoading(false);
        },500)
      }
    } 
  

    let decreaseQuantity = () => {
      setQuantity(quantity-1);
    }

    let increaseQuantity = () => {
      quantity < 100 && setQuantity(quantity+1);
    }
    let handleQuantity = (e) => {
      setQuantity(e.target.value)
    }

   
    const handleSetSlId = (id) => {
      setSlId(id);
    }

    

    const handleBuyCookie = async (e) => {
      e.preventDefault();
      toast.warning('Vui lòng đăng nhập!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }) 
      setTimeout(() => {
        handleIsEnable()
      },300)
    }

    const handleBuy = async (e) => {
     
      if(quantity > 0 && quantity < 1000) {
        e.preventDefault();
        let data = new FormData()
        try {
          setLoading(true);
          data.append("user_id",Cookies.get("user_id"))
          data.append("product_id",id)
          data.append("product_quantity",quantity)
          data.append("create_date",dateTime)
          const insert = await axios.post(apiInsertCart, data)
          setTimeout(async () => {
            if(insert) {
              toast.success('Thêm thành công!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }) 
                setIsChange(insert)
                setLoading(false)
            } else {
              toast.warning('Thêm thất bại!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
              setLoading(false)
            }
          },500)     
        } catch (err) {
          setLoading(true);
          setTimeout(async () => {
          
            toast.warning('Thêm thất bại!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              })
            setLoading(false)
          
          },500)
        }
      }
    
    }

  

   

    useEffect(() => {
      fetchData();
    },[history.location.pathname])
    
    useEffect(() => {
      window.scrollTo(0, 0);
    },[history.location.pathname])
    
    
    

    return (
        <>
        {errorPage &&
          <Redirect to="/404"/>
        }
        <div className="food_content">
            <div className="food_content-wrapper container">
                <div className="food_content-main">
                <div className="food_content-list row">
                  <div className="food_content-item col-6">
                    <div className="food_content-img-wrapper">
                      <img src={product.product_image ?? ""}/>
                    </div>
                  </div>
                  <div className="food_content-item col-6">
                    <FoodInfor
                    product_price={product.product_price ?? ""}
                    product_name={product.product_name ?? ""}
                    onIncreaseQuantity={increaseQuantity}
                    onDecreaseQuantity={decreaseQuantity}
                    onQuantityChange={handleQuantity}
                    onBuy={handleBuy}
                    onBuyCookie={handleBuyCookie}
                    loading={loading}
                    quantity={quantity}
                    />
                  </div>
                </div>
                </div>
            </div>
            <div className="food_content-description-wrapper container">
              <div className="food_content-description  py-40">
                  {
                    describeButtons.map((item,index) => {
                      const {id,text} = item;
                      return (
                        <BigButton 
                        onClick={(e) => handleSetSlId(id)}
                        btnStyle={id === slId ? "description btn-hover" : "description"}
                          margin={id===2 && "0 0 0 1rem"}
                          text={text}                 
                          borderRadius="0"
                          fontSize="1.4rem"
                          border={true}
                          key={id}
                          color="var(--text-color)"
                          height= "auto"
                          padding="1.6rem 1.8rem"
                        />
                      )
                    })
                  }
              </div>
              <div className="food_content-detail-wrapper">
                <div className="food_content-detail-list">
                  {
                        slId === 1 ? 
                        detailsDescription.map((item,index) => {
                          const {id,header,detail} = item;
                          return (
                            <div className="food_content-detail-item" key={id}>
                              <div className="detail_item-heading">
                                <h3 className="detail_item-header">
                                  {header}
                                </h3>
                              </div>
                              <div className="detail_item-infor-wrapper">
                                <p className="detail_item-infor">
                                  {detail}
                                </p>
                              </div>
                            </div> 
                          )
                        })
                        : 
                        <div className="food_content-comment-wrapper">
                          <div className="food_content-comment">
                            <Comment 
                            id={id}
                            apiComments={apiComments}
                            apiInsertComment={apiInsertComment}
                            rateStars={rateStars}
                            setErrorPage={setErrorPage}
                            product={product}
                            dateTime={dateTime}
                            history={history}
                            BigButton={BigButton}
                            handleBuyCookie={handleBuyCookie}
                            />
                          </div>
                        </div>            
                  }
                </div>
              </div>
            </div>
        </div>
       
        </>
    )
}
