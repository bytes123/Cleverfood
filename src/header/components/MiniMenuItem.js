import React,{ useState} from 'react';
import SubMenu from './SubMenu';
import Profile from './Profile';
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
export default function MiniMenuItem({
    id,
    language,
    icon,
    subIcon,
    link,
    languages,
    contentProducts,
    user,
    setUser,
    handleIsEnable,
    isChange,
    setIsChange
    }) {

        const [cartLength,setCartLength] = useState(0);

    return (
        <li className="header_mini-item m-x-1-5" key={id}>
            <Link 
            to={link}
            className={`header_mini-item-link ${id === 2 && "header_mini-login"}`} 
            onClick={(e) => {
                e.preventDefault();
                id === 2 && !Cookies.get("user_id") && handleIsEnable();
            }}
            >   {
                    contentProducts &&

                    <div className="header_mini-item-quantity">
                        <div className="item_quantity">
                            {cartLength > 0 &&  cartLength}
                        </div>
                    </div>
                }
                {language ? 
                    <>
                        <span className="header_mini-item-text">{language}</span>
                        <img alt={language} src={icon} className="language-icon"/>
                        {subIcon &&
                            <span className="sub-icon">
                                {subIcon}
                            </span> 
                        }
                    </>       
                : Cookies.get("user_id") && id===2 ? <Profile/> : icon }
            </Link>
            <>
                {Cookies.get("user_id") && id===2 && 
                    <SubMenu user={user} setUser={setUser}   setIsChange={setIsChange}/>
                }
                {id === 4 && 
                    <SubMenu languages={languages}/> 
                }
                {id === 3 &&
                    <SubMenu
                    {...contentProducts} 
                    isChange={isChange} 
                    setCartLength={setCartLength}
                    setIsChange={setIsChange}
                    isCart={true}/> 
                }
            </>
        </li>
    )
}
