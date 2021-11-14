import React,{useState,useEffect,useRef,useMemo} from 'react'
const useLoading = () => {
    const [isVisible,setIsVisible] = useState(true)
    const [dataLength,setDataLength] = useState();
    const [limitCommentLength,setLimitCommentLength] = useState(5)
    const [newDataLength,setNewDataLength] = useState();
    const lastItem = useRef(null);


    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
    }

    const handleVisible = () => {
        setIsVisible(false)   
    }

    
    const handleNewDataLength = () => {
        setIsVisible(true)
        setTimeout(() => {    
            handleVisible()
            setNewDataLength(newDataLength+5)
        },2000)
    }

    const handleMoreDataLength = () => {
        setLimitCommentLength(limitCommentLength+5)
    }

    const infiniteScroll = () => {
        if(lastItem.current !== null && newDataLength < dataLength) {
            if(isInViewport(lastItem.current)) {
                handleNewDataLength()
            }     
        }   
    }

    const clickScroll = () => {
        handleMoreDataLength()   
    }

    useEffect(() => {
        setTimeout(() => {
            setNewDataLength(5)
        },2000)
    },[])

    return {isVisible,
            setDataLength,
            handleMoreDataLength,
            lastItem,
            newDataLength,
            infiniteScroll,
            clickScroll,
            limitCommentLength,
            setLimitCommentLength
            }

}

export default useLoading