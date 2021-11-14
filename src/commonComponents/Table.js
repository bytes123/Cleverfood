import React,{useState,useEffect} from 'react'
import Quantity from './Quantity'
import DeleteBtn from '../commonComponents/DeleteBtn'
export default function Table(
    {
    listTable,
    amountProduct,
    onDelete,
    formatNumber,
    isChange
    }
) {

    const [newAmount,setNewAmount] = useState(amountProduct)


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                  <th>TỔNG</th>
                </tr>  
            </thead>
            <tbody>
                {listTable.map((item) => 
                    <tr key={item.product_id} className={!item[item.length-1] ? 'b-b' : ''}>
                        <td style={{display: 'flex',alignItems: 'center',position: 'relative',justifyContent: 'normal'}}>
                            <DeleteBtn 
                            className="cart_item-delete"
                             onDelete={(e) => onDelete(e,item.product_id)}/>
                            <div className="cart_item-image">
                                <img src={item.product_image}/>
                            </div>
                            <div className="cart_item-name">
                                <span>
                                    {item.product_name}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="cart_item-price price">
                                {formatNumber(item.product_price)}
                                &nbsp;
                                <span className="unit">
                                    đ
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="cart_item-quantity">
                                <Quantity 
                                id={item.product_id} 
                                listTable={listTable} 
                                newAmount={newAmount}
                                setNewAmount={setNewAmount}
                                />
                            </div>
                        </td>
                        <td>
                            <div className="product_amount-wrapper price">
                               {formatNumber(newAmount[item.product_id] * item.product_price)}
                                &nbsp;
                                <span className="unit">
                                    đ
                                </span>
                            </div>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>    
    )
}
