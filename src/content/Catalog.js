import React,{useEffect,useState,useRef} from 'react'
import {useParams,Redirect,Link,useHistory} from 'react-router-dom'
import api from '../data';
import {selection} from "../data"
import CatalogList from './catalogComponents/CatalogList';

export default function Catalog({
    idPage
}) {
    
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }

        const axios = require('axios').default;
        const history = useHistory();
        const [errorPage,setErrorPage] = useState(false);
        const {id} = useParams();
        const [catalogItem,setCatalogItem] = useState([])
        const [catalog,setCatalog] = useState([])
        const [loading,setLoading] = useState(false);
        const [products,setProducts] = useState([])
        const [productsMini,setProductsMini] = useState([]);
        let [activePagination,setActivePagination] = useState(0);
        const {apiCatalog,apiProduct} = api
        const [selected,setSelected] = useState("default")
  
  const fetchCatalog = async () => {
    try {
        const data = await axios.get(apiCatalog);
        if(data.data) {
            await setCatalog(data.data);  
            if(data.data.some(item => item.catalog_meta === id || idPage)) {
                await setCatalogItem(...data.data.filter((item) => item.catalog_meta === id || idPage && item));
                setTimeout(() => {
                    setLoading(false);
                },500)
               
            } else {
                setErrorPage(true);
            }
        } else {
            // LỖI KẾT NỐI
        }
        

    } catch(error) {
        setCatalog([])
    }
  } 
  
  const fetchProducts = async (meta,selected) => {
    try {
        const data = new FormData();
        data.append("product_type",meta)
        data.append("product_option",selected)
        const products = await axios.post(apiProduct,data);
        await setProducts(products.data);
        setTimeout(() => {
            setLoading(false);
        },500)

    } catch(error) {
        setErrorPage(true)
    }
  }

  const fetchProductsMini = async () => {
    try {
        const data = new FormData();
        data.append("products_random",true)
        const products = await axios.post(apiProduct,data);
        await setProductsMini(products.data);
        setTimeout(() => {
            setLoading(false);
        },500)

    } catch(error) {
        // LỖI CSDL
    }
  }


  const handlePagination = (index) => {
      setActivePagination(index)
  }

  const handlePageDown = () => {
    setActivePagination(activePagination-=1)
  }

  const handlePageUp = () => {
    setActivePagination(activePagination+=1)
  }

  useEffect(() => {
      window.scrollTo(0,0)
  },[history.location.pathname,activePagination])

  useEffect(() => {
    fetchCatalog();
    
  },[history.location.pathname])

  useEffect(() => {
    fetchProducts(id || idPage,selected);
    
  },[history.location.pathname,selected])

  useEffect(() => {
    fetchProductsMini();
  },[history.location.pathname,selected])

  const handleSelection = (e) => {
    setSelected(e.target.value)
  }


   
  


    return (
        !errorPage ?
        <div className="catalog_wrapper load-wrapper">
            <div className="catalog container">
                <div className="catalog_content-wrapper">
                    <div className="catalog_content row">
                        <div className="catalog_content-left col-3">
                            <div className="content_left-heading">
                                <h2 className="content_left-header">
                                <Link to="/" className="catalog_item-products-link">
                                    TRANG CHỦ
                                </Link> 
                                &nbsp; / &nbsp;
                                <span>
                                    {idPage ? 'CỬA HÀNG' : catalogItem.catalog_name}
                                </span>
                                </h2>
                            </div>
                            <div className="content_left-catalog-wrapper">
                                <CatalogList 
                                header="DANH MỤC SẢN PHẨM"
                                list={catalog}
                                type="catalog"
                                />
                            </div>
                            <div className="content_left-products-wrapper">
                                <CatalogList 
                                    formatNumber={formatNumber}
                                    header="SẢN PHẨM"
                                    list={productsMini}
                                    type="products_list"
                                />
                            </div>
                        </div>
                        <div className="catalog_content-right col-9">
                            <div className="content_right-heading">
                                <div className="content_right-show">
                                    <p>
                                        Hiển thị 1–12 trong {products.length} kết quả
                                    </p>
                                </div>
                                <div className="content_right-selection">
                                    <select
                                    onChange={handleSelection}
                                    class="content_right-select-list"
                                    value={selected}
                                    >
                                    {
                                        selection.map((item) => {
                                            return (
                                            <option 
                                            value={item.usecase}
                                             className="content_right-select-item">
                                                {item.name}
                                            </option>
                                            )
                                        })
                                    }    
                                    </select>                               
                                </div>
                            </div>
                            <div className="content_right-products-wrapper">
                                <div className="content_right-products">
                                    <ul className="content_right-products-list row">
                                        {
                                            products.map((item,index) => {
                                                const {product_id,product_name,product_price,product_image} = item
                                                return (
                                                    index >= (activePagination + 1) * 12 -12 && index < (activePagination + 1) * 12 &&
                                                    <li className="content_right-products-item product_item col-3" key={product_id}>
                                                    <div className="products_item-wrapper">
                                                    <div className="products_item-img-wrapper">
                                                        <Link to={`/cleverfood/san-pham/${product_id}`} className="products_item-infor-link">
                                                            <img src={product_image} alt="" className="products_item-img" />
                                                        </Link>
                                                    </div>
                                                    <div className="products_item-infor">
                                                    <div className="products_item-infor-heading">
                                                        <Link to={`/cleverfood/san-pham/${product_id}`} className="products_item-infor-link">
                                                            <h3 className="products_items-infor-header">
                                                               {product_name}
                                                            </h3>
                                                        </Link>
                                                    </div>
                                                    <div className="products_item-infor-price">
                                                        <p>
                                                        {formatNumber(product_price)} &nbsp; 
                                                            <span>
                                                                đ
                                                            </span>
                                                        </p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </li>
                                                )
                                            })
                                        }                   
                                    </ul>
                                </div>
                                <div className="content_right-pagination">
                                    <ul className="pagination-list row">
                                        {
                                            activePagination > 0 &&
                                            <li className="pagination-item pagination-arrow">
                                                <div className="pagination-button-wrapper">
                                                    <button className="pagination-button"
                                                    onClick={handlePageDown}
                                                    >
                                                        <span>
                                                            {'<'}
                                                        </span>
                                                    </button>
                                                </div>
                                            </li>
                                        }
                                        {
                                            
                                            Array(Math.ceil(products.length/12)).fill(0).map((item,index) => {
                                                return (
                                                    <li className="pagination-item">
                                                        <div className="pagination-button-wrapper">
                                                            <button
                                                            onClick={(e) => handlePagination(index)}
                                                            className={`pagination-button ${index ===  activePagination ? "active" : ""}`}>
                                                                {index+1}
                                                            </button>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                        {
                                            activePagination + 1 < Math.ceil(products.length/12) && 
                                            <li className="pagination-item pagination-arrow">
                                                <div className="pagination-button-wrapper">
                                                    <button className="pagination-button"
                                                    onClick={handlePageUp}
                                                    >
                                                        <span>
                                                            {'>'}
                                                        </span>
                                                    </button>
                                                </div>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> :
        <Redirect to="/404"/>
    )
}
