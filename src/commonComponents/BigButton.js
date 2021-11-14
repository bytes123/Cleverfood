import React from 'react'
import {Link} from 'react-router-dom'

export default function BigButton({
    hoverDisabled,shape = "square",
    color = "var(--white-color)",
    background,
    width = "auto",
    btnClass = "default",
    text,
    fontSize,
    padding,
    margin,
    position,
    onClick,
    borderRadius,
    border,
    marginLeft,
    height,
    link,
    type,
    btnStyle,
    zIndex,
    }) {

    const btnType = `btn big-btn btn-${btnStyle}`
    const btnText = text
    return (
        <button 
            type={type} 
            className={btnType} 
            style={{
            marginLeft: marginLeft,
            borderRadius: shape === "soft" ? "18px" : "0px",            
            color: color,
            width: width,
            pointerEvents: hoverDisabled && "none",
            fontSize: fontSize,
            padding: padding,
            margin: margin,
            position: position,
            background: background,
            border: border === true && "1px solid rgba(0,0,0,0.08)" ,
            height: height,
            zIndex: zIndex,
            }}
        onClick={onClick}>
            {
                link ? 
                <Link to={link} className="btn_link">
                    {btnText}
                </Link> :
                <span>
                    {btnText}
                </span>
            }
        </button>
    )
}
