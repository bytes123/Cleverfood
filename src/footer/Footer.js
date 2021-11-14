import React from 'react'
import "./footer.css"
import FooterMenuList from './components/FooterMenuList'
import FooterCopy from './components/FooterCopy'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <FooterMenuList/>
                <FooterCopy/>
            </div>
        </div>
    )
}
