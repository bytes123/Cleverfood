import React from 'react'
import SubMenu from './SubMenu';
import {Link} from 'react-router-dom'
export default function HomeMenuItem({
    id,
    title,
    listStore,
    link
    }) {
    return (
        <li className="header_home-item p-x-2 flex" key={id}>
            <Link to={link} className="header_home-item-link">
                <span className="header_home-item-text">{title}</span>
                {listStore && 
                    <span className="sub-icon">
                        {listStore.icon}
                    </span> 
                }
            </Link>

            {listStore && <SubMenu {...listStore}/>}
                            
        </li>
    )
}
