import React,{useState,useEffect} from 'react'
import { moveTopIcon } from './data'
export default function MoveToTop() {

    const [moveTop,setMoveTop] = useState(false)

  useEffect(() => {
    const handleScroll = (e) => {
      setMoveTop(window.pageYOffset >= 400);
    }
    
    window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    
  },[])

  const moveToTop = () => {
 
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    
  }

    return (
        <div className={moveTop ? "move_top active" : "move_top"} onClick={moveToTop}>
            <div className="move_top-wrapper">
                {moveTopIcon.icon}
            </div>
        </div>
    )
}
