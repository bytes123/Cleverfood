import React,{useEffect,useRef} from 'react'
import BigButton from '../../commonComponents/BigButton'
export default function CarouselItem({
    img,
    mini_img,
    brand,
    heading,
    content,
    btnText,
    btnType,
    btnWidth,
    btnShape
    }) {

    const slider = useRef(null);

    useEffect(() => {
        slider.current.classList.add("slider-img-down");    
    },[])

    return (
        <div className="slider-img-wrapper" >
            <img alt={brand} style={{width: '100%',height: '650px'}} src={img}/>
            <div className="slider-mini-wrapper">
                <img alt={brand} ref={slider}  src={mini_img} />
            </div>
            <div className="slider-infor">
                <div className="slider-brand py-10">
                    <BigButton btnStyle={"primary-green"} text={brand} width="140px" hoverDisabled/>
            
                </div>
                <div className="slider-heading py-10">
                    {heading}
                </div>
                <div className="slider-content py-10">
                    {content}
                </div>
                <div className="slider-button py-10">
                    <BigButton btnStyle={btnType} text={btnText} shape={btnShape} width={btnWidth}/>
                </div>
            </div>
      </div>
    )
}
