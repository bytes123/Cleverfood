import React from 'react'

export default function ShipBannerItem({logo}) {
    return (
        <li className="food_content-ship-item col-2">
            <img src={logo} alt="" className="food_content-ship-logo" />
        </li>
    )
}
