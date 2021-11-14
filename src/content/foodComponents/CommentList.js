import React,{ useState,useEffect,useRef } from "react"

import {AiFillLike,AiFillDislike,AiFillStar} from 'react-icons/ai'
export default function CommentList({
    id,
    apiComments,
    setErrorPage,
    history,
    limitCommentLength,
    BigButton,
    clickScroll,
    isComment
}) {
    
    const [comments,setComments] = useState([]);
    const [commentsLength,setCommentLength] = useState()
    const axios = require('axios').default;

    const fetchComments = async ()  => {
        const data = new FormData()
        data.append("product_id",id)
        const regex = new RegExp("^[0-9]*$")
        if(regex.test(id)) {
          try {
            const comments = await axios.post(apiComments,data);
            if(comments.data.length > 0) { 
              setCommentLength(comments.data.length)
              setComments(comments.data.filter((item,index)=> index < limitCommentLength && item ))
            }else {
              setComments([])
            }
          } catch(error) {
            setComments([])
          }
        } else {
          setErrorPage(true)
        }
        
      }


    
    useEffect(() => {
        fetchComments();
      },[history.location.pathname,isComment,limitCommentLength])

    return (
        <>
            <ul className="food_content-comment-list py-20">
            {
                comments.map((comment,index) => {
                    const {comment_id,comment_stars,comment_infor,author,post_date} = comment
                    return (
                        <li className="food_content-comment-item" key={index}>
                                        <div className="food_content-comment-avatar">
                                          <img src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=-BCV3mYikycAX9a2qD2&_nc_ht=scontent.fvca1-1.fna&oh=9abfed29c97451712ec9ebf76fdbb5d0&oe=61A5D476" alt="" />
                                        </div>
                                        <div className="food_content-comment-infor">
                                          <h4 className="content_comment-author">
                                            {author}
                                            <div className="content_comment-star">
                                              {new Array(5).fill(0).map((item,index) => {
                                                return (
                                                  <span className={`content_comment-star-item ${index < comment_stars ? "active" : ""}`}>
                                                    <AiFillStar/>
                                                  </span>
                                                )
                                              })}
                                            </div>
                                          </h4>
                                          <p className="content_comment-infor">
                                            {comment_infor}
                                          </p>
                                          <div className="content_comment-reaction py-10">
                                            <AiFillLike style={{cursor: "pointer",fontSize: "1.2rem"}}/>
                                            <AiFillDislike style={{cursor: "pointer",fontSize: "1.2rem",marginLeft: "1rem"}}/>
                                          </div>
                                        </div>
                        </li>
                    )
                })
            }
            </ul>
            {
                limitCommentLength < commentsLength && 
                    <div className="comment_more-btn">
                        <BigButton
                            text="Xem thêm"
                            btnStyle="checkout"
                            onClick={clickScroll}
                        />     
                    </div>  
            
            }
        </>
    )
}
