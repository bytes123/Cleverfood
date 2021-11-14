import React, { useState,memo } from 'react'
import MiniMenuItem from './MiniMenuItem';
function MiniMenu({
    miniMenu,
    cartTotalPrice,
    user,
    setUser,
    handleIsEnable,
    isChange,
    setIsChange
    }) {

     
    return (
        <div className="header_mini-menu">
            <ul className="header_mini-list flex">
                {miniMenu.length > 0 &&
                miniMenu.map((item,index) => {
                    return (
                        <MiniMenuItem 
                            {...item} 
                            cartTotalPrice={cartTotalPrice} 
                            key={index}
                            user={user}
                            setUser={setUser}
                            handleIsEnable={handleIsEnable}
                            isChange={isChange}
                            setIsChange={setIsChange}
                            />
                    )
                })}
            </ul>
        </div>
    )
}
export default memo(MiniMenu);
