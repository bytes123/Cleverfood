import React,{ useState,useEffect,useRef } from "react"
import validateEmail from "../../functions/validateEmail";
import CommentList from "./CommentList"
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import * as ReactBootstrap from 'react-bootstrap'
import useLoading from "../../useLoading";
export default function Comment({
    id,
    apiComments,
    apiInsertComment,
    setErrorPage,
    product,
    dateTime,
    history,
    rateStars,
    BigButton,
    handleBuyCookie
}) {

    const axios = require('axios').default;
    const [validEmail,setValidEmail] = useState(true);
    const [loadSubmit,setLoadSubmit] = useState(false);
    const [isComment,setIsComment] = useState(false)
    let [star,setStar] = useState(0)
    
    const comment = useRef("")
    const author = useRef("")
    const email = useRef("")
    const {
      limitCommentLength,
      lastItem,
      setLimitCommentLength,
      clickScroll
      } = useLoading()
    

    const handleSetStar = (star) => {
        setStar(star);
    }

    const handleEmail = () => {
        if(validateEmail(email.current.value)) {
          setValidEmail(true);
        } else {
           setValidEmail(true);
        }
      }
    
      const handleComment = async (e) => {
        e.preventDefault();
        if(!validateEmail(email.current.value)) {
          setValidEmail(false);
        } else if(comment.current.value !== "" && 
          author.current.value !== "" && 
          email.current.value !== "") {
            setValidEmail(true);
            const data = new FormData();
            data.append("user_id",Cookies.get("user_id") ?? null)
            data.append("product_id",product.product_id)
            data.append("comment_stars",star)
            data.append("comment_infor",comment.current.value)
            data.append("author",author.current.value)
            data.append("author_email",email.current.value)
            data.append("post_date",dateTime)
          try {
            setLoadSubmit(true)   
            const state = await axios.post(apiInsertComment,data)   
           
            setTimeout( async () => {
              if(state.data === 1) {
                toast.success('Gửi thành công', {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  })
                setIsComment(state)
                setLoadSubmit(false)
                setTimeout(() => {
                  setIsComment(state)
                },200)
              } else {
                toast.error('Gửi thất bại', {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  })
              }
            },500)   
          } catch {
            setLoadSubmit(true)
            setTimeout(async () => {
              toast.error('Gửi thất bại', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            },500)
            setLoadSubmit(false)
          }
        } else {
          toast.error('Vui lòng điền đầy đủ!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
        
    }




    return (  
        <>
        <div className="food_content-comment-heading">
            <h3 className="food_content-comment-header">
                                Đánh giá
            </h3>
            <div className="food_content-comment-box">    
                <CommentList 
                    setErrorPage={setErrorPage}
                    id={id}
                    apiComments={apiComments}
                    setValidEmail={setValidEmail}
                    setLoadSubmit={setLoadSubmit}
                    apiInsertComment={apiInsertComment}
                    product={product}
                    star={star}
                    email={email}
                    author={author}
                    product={product}
                    dateTime={dateTime}
                    history={history}
                    setLimitCommentLength={setLimitCommentLength}
                    limitCommentLength={limitCommentLength}
                    lastItem={lastItem}
                    isComment={isComment}
                    BigButton={BigButton}
                    clickScroll={clickScroll}
                    isComment={isComment}
                />
                
                             
            </div>
            </div>
            <div className="food_content-form-wrapper mt-40">
                <form className="food_content-form">
                                <div className="food_comment-form-heading">
                                <h3>
                                  Hãy là người đầu tiên nhận Xét "{product.product_name}"
                                </h3>                     
                                </div>
                                <div className="food_comment-form-rate-wrapper">
                                <div className="food_comment-form-rate-label">
                                  <p>
                                    Đánh giá của bạn
                                  </p>
                                </div>
                                <div className="food_comment-form-rate">
                                  <ul className="food_comment-form-rate-list">
                                    {
                                      rateStars.map((item,index) => {
                                        const {id,icon} = item;
                                        return (
                                          <li className={`food_comment-form-rate-item ${id === star ? "active" : ""}`} 
                                          key={index} 
                                          onClick={(e) => handleSetStar(id)}>
                                            {icon}
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                </div>
                                </div>
                                <div className="food_comment-main">
                                  <div className="food_comment-label">
                                  Nhận xét của bạn *
                                  </div>
                                  <div className="food_comment-input-wrapper">
                                  <textarea
                                   ref={comment}
                                    name="comment" 
                                    className="food_comment-input"
                                    disabled={loadSubmit}
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="food_comment-profile-wrapper row">
                                    <div className="food_content-name-wrapper col-6">
                                      <h4 className="food_content-name-header">
                                        Tên *
                                      </h4>
                                      <input
                                      disabled={loadSubmit}
                                      ref={author} 
                                      name="author" 
                                      type="text"
                                       className="food_content-name-input" />
                                    </div>
                                    <div className="food_content-email-wrapper col-6">
                                      <h4 className="food_content-email-header">
                                        Email *
                                      </h4>
                                      <input 
                                      disabled={loadSubmit}
                                      ref={email}
                                       type="email" 
                                       className={`food_content-email-input ${!validEmail && "notvalid"}`}
                                       onChange={handleEmail}
                                       />
                                       {!validEmail && 
                                        <p className="email-notvalid">
                                          Email không hợp lệ
                                        </p>
                                       }
                                    </div>
                                </div>
                                <div className="food_comment-submit-wrapper py-10">
                                  <div className="food_comment-submit">
                                  <BigButton 
                                  text="GỬI ĐI"
                                  btnStyle="primary-green food_submit-btn"
                                  borderRadius="none"
                                  width="100%"
                                  onClick={(e) => Cookies.get("user") ? handleComment(e) : handleBuyCookie(e)}
                                  />
                                    {
                                    loadSubmit && 
                                    <div className="product-item-spinner" 
                                    style={{
                                    position: 'absolute',
                                    fontSize: '1.5rem',
                                    height: '100%',
                                    width: '100%'}}>
                                      <ReactBootstrap.Spinner animation="border" variant="success" />
                                    </div>
                                    }
                                  </div>
                                </div>
                </form>
            </div>
        </>
    )
}
