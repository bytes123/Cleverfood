import React from 'react'
import { useState,useEffect } from "react"
import  Header  from './header/Header'
import  Register  from './register/Register'
import  Content  from './content/Content'
import  Footer  from './footer/Footer'
import  FoodContent  from './content/FoodContent'
import  MainCart  from './content/MainCart'
import  Catalog  from './content/Catalog'
import  Bill  from './content/Bill'
import  MoveToTop  from './MoveToTop'
import  NotFound  from './NotFound'
import Toast from './commonComponents/Toast'
import api from './data';
import Spinner from './Spinner'
import { Code } from 'react-content-loader'
import { BrowserRouter as Router,Switch,Route,Route as Redirecter,Redirect,useHistory,HashRouter } from 'react-router-dom';
import './App.css'
function App() {
  

 
  const axios = require('axios').default;
  const {apiProducts,apiCatalog} = api
  const [products,setProducts] = useState([])
  const [isChange,setIsChange] = useState(null)
  const [isEnable,setIsEnabled] = useState(false);
  const [isNotValid,setIsNotValid] = useState(false)
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [mainCartLoading,setMainCartLoading] = useState(false);
  const [foodPageLoading,setFoodPageLoading] = useState(false);

  const handleIsEnable = (e) => {
    setIsEnabled(true);
    document.body.style.overflow = 'hidden';
    setIsNotValid(false);
}

const handleDisable = (e) => {
    setIsEnabled(false);
    document.body.style.overflow = 'auto';
}

  const fetchDataProducts = async () => {
    try {
        const products = await axios.get(apiProducts);
        setProducts(products.data);
        
    } catch(error) {
        setProducts([])
    }
  } 

  

  useEffect(() => {
    fetchDataProducts();

  },[])
  
  useEffect(() => {
    if(mainCartLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'
    }
  },[foodPageLoading])

  useEffect(() => {
    if(foodPageLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'
    }
  },[foodPageLoading])



  

  return (
    <Router >
      <div className="App load-wrapper">  
        <Header isChange={isChange}
         setIsChange={setIsChange}
         isNotValid={isNotValid}
         setIsNotValid={setIsNotValid}
         isEnable={isEnable}
         handleIsEnable={handleIsEnable}
         handleDisable={handleDisable}
         isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
         />
          <Switch>
            <Route exact path="/cleverfood">
              <Content products={products}/>
            </Route>
            <Route path="/cleverfood/san-pham/">
              <Route path="/cleverfood/san-pham/:id">
                {foodPageLoading && <Spinner/>}
                <FoodContent  
                  setFoodPageLoading={setFoodPageLoading}
                  foodPageLoading={foodPageLoading}
                  setIsChange={setIsChange} 
                  handleIsEnable={handleIsEnable}/>
                </Route>
                
            </Route>
            <Route path="/cleverfood/danh-muc/">
                <Route exact path="/cleverfood/danh-muc/:id">
                  <Catalog/>
                </Route>
            </Route>
            <Route path="/cleverfood/cua-hang/">
                <Catalog idPage="rau-cu"/>
            </Route>
            <Route path="/cleverfood/dang-ky">
              <Register handleIsEnable={handleIsEnable} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
            </Route>
            <Route path="/cleverfood/gio-hang">
              {
                mainCartLoading && 
                <Spinner/>
              }
              <MainCart
              mainCartLoading={mainCartLoading}
              setMainCartLoading={setMainCartLoading} 
              setIsChange={setIsChange} isChange={isChange}
              />
            </Route>
            <Route path="/cleverfood/tai-khoan/don-mua">
              <Bill/>
            </Route>
            <Route  path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
          <Redirecter exact path="/"> 
            <Redirect to="/cleverfood">
              <Content/>
            </Redirect>
          </Redirecter>
          <Redirecter exact path="/cleverfood/san-pham"> 
            <Redirect to="/cleverfood">
              <Content/>
            </Redirect>
          </Redirecter>
          <Redirecter exact path="/dang-ky"> 
            <Redirect to="/cleverfood/dang-ky">
              <Content/>
            </Redirect>
          </Redirecter>
          <MoveToTop/>
          <Toast/>
          <Footer/>
      </div>
    </Router >
  );
}

export default App;

