import React,{useState,useEffect} from 'react'
import "./Quantity.css"
export default function Quantity({
    newAmount,
    id,
    listTable,
    setNewAmount
}) {

    const [quantity, setQuantity] = useState(newAmount[id]);


    useEffect(() => {
        setQuantity(newAmount[id])
    },[listTable])

    const handleQuantity = (e) => {
        setQuantity(e.target.value)
       setNewAmount({
            ...newAmount,
           [id]: Number(e.target.value)
       })
    }

    const handleDecrease = (e) => {
        setQuantity(quantity-1)
        setNewAmount({
            ...newAmount,
            [id]: quantity-1
        })
       
    }

    const handleIncrease = (e) => {
        setQuantity(quantity+1)
        setNewAmount({
            ...newAmount,
            [id]: quantity+1
        })
       
    }
    return (
        <div className="quantity-selection">
            <div className="quantity-decrease quantity-function" onClick={handleDecrease}>
                <span>-</span>
            </div>
            <input name={id} type="number" min="1" value={+quantity} onChange={handleQuantity}/>
            <div className="quantity-increase quantity-function" onClick={handleIncrease}>
                <span>+</span>
            </div>
        </div> 
    )
}
