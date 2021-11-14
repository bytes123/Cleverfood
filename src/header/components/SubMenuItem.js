import React from 'react'
import {Link} from 'react-router-dom'
export default function subMenuItem({
    id,
    language,
    icon,
    link,
    title,
    catalog_name,
    catalog_meta
    }) {
    return (
        <li className="sub_menu-item" key={id}>
            {icon && <img alt={title} src={icon} className="language-icon"/>}
            {language && <a href={link} className="sub_menu-link text-decoration-none">{language}</a>}
            {catalog_name && <Link to={`/cleverfood/danh-muc/${catalog_meta}`} className="sub_menu-link text-decoration-none">{catalog_name}</Link>}
        </li> 
    )
}
