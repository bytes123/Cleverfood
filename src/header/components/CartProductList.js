import React,{ useState,useEffect,useMemo }from 'react'
import CartProductItems from './CartProductItems'
import BigButton from '../../commonComponents/BigButton'
import  formatNumber  from '../../functions/formatNumber'
import useTotal from '../../useTotal'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
export default function CartProductList({
    cart,
    totalText,
    buttons,
    isChange,
    setIsChange,
    setCartLength
    }) {
    const [newCart,setNewCart] = useState([])
    const {amountProduct} = useTotal(cart);
       const getTotalQuantity = useMemo(() => {
            return formatNumber(cart.reduce((total, item) => Number(item.product_price) + total, 0))
        },[cart])
        
    
    const style = {
        overflowY: 'scroll',
    }
    
   
    
    

    useEffect(() => {
        setNewCart([...new Map(cart.map(item =>
            [item["product_id"], item])).values()]);
    },[cart])

    useEffect(() => {
        setCartLength(newCart.length)
    },[newCart.length]);
    
 
    return (
        cart.length > 0 &&
        <div className="cart-wrapper">
        <div className="cart">
            <ul className="product-list" style={cart.length > 2 ? style : undefined}> 
                {newCart.map((product,index) => {

                    
                    return <CartProductItems 
                    amountProduct={amountProduct[product.product_id]}
                    {...product} 
                    key={index}
                    formatNumber={formatNumber}
                    isChange={isChange}
                    setIsChange={setIsChange}
                    />
                })}
                
            </ul>
            <div className="cart-total-price flex">
                <span>{totalText}&nbsp;</span>
                <span className="cart-price-total">{getTotalQuantity} 
                    &nbsp;
                    <span className="cart-price-unit unit">đ</span>
                </span>
            </div>
            <div className="cart-button">
                {buttons && buttons.map((button,index) => {
                    return (
                            <BigButton key={index} {...button}/>
 
                    )
                })}
            </div>
        </div>
    </div>
    )
}
