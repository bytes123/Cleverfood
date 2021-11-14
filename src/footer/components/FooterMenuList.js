import React from 'react'
import {footerMenuList} from '../../data'
import FooterMenuItem from './FooterMenuItem'
export default function FooterMenuList() {
    return (
        <div className="footer_section-wrapper container ">
            <div className="footer_section-list row">
                {
                    footerMenuList.map((item,index) => {
                        return (
                            <FooterMenuItem key={index} item={item} index={index} listLength={footerMenuList.length}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
