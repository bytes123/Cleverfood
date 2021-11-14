import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './DeleteBtn.css'
export default function DeleteBtn({
    onDelete,
    className
}) {
    return (
        <button className={`delete-btn product-delete ${className}`} onClick={onDelete}>
            <AiOutlineCloseCircle className="delete-icon"/>
        </button>
    )
}
