import React,{memo} from 'react'
import HomeMenuItem from './HomeMenuItem';
function HomeMenu({homeMenu}) {
    return (
        <div className="header_home-menu">
            <ul className="header_home-list flex">
                {homeMenu.map((item,index) => {
                    return (
                        <HomeMenuItem {...item} key={index}/>
                    )
                })}
                
             
            </ul>
        </div>
    )
}
export default memo(HomeMenu)