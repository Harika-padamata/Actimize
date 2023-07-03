import React from 'react'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import ProductsInnerPage from './components/ProductsInnerPage';
import Services from './components/Services';
import ServicesInnerPage from './components/ServicesInnerPage';


function App() {
  return (
    <div>
      <Routes>
          <Route path="/" exact element={ <Homepage/> }/>
          <Route path="aboutus"  exact element={ <Aboutus/> } />
          <Route path='products' exact element={<Products/>}/>
          <Route path='products/:name' exact element={<ProductsInnerPage/>}/>
          <Route path='services' exact element={<Services/>}/>
          <Route path='services/:name' exact element={<ServicesInnerPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App