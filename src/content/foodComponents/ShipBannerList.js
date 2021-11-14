import React from 'react'
import {shipBanner} from "../../data"
import ShipBannerItem from './ShipBannerItem';
export default function ShipBannerList() {
    return (
        <ul className="food_content-ship-list row">
           {shipBanner.map((item) => {
                const {id,logo} = item;                
                return (
                    <ShipBannerItem key={id} logo={logo}/>
                )
            })}                                 
        </ul>
    )
}
