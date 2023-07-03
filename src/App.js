import React from 'react'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Products from './components/Products';
import ProductsInnerPage from './components/ProductsInnerPage';
import Services from './components/Services';
import ServicesInnerPage from './components/ServicesInnerPage';
import ImageSlider from "./components/ImageSlider";
import Technology from "./components/Technology";
import Microsoft from "./components/Microsoft";
import Client from "./components/Client";
import Acceldata from "./components/Acceldata";

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
          <Route path="technology"  exact element={ <Technology/> } />
          <Route path="technology/Microsoft"  exact element={ <Microsoft/> } />
          <Route path="Client"  exact element={ <Client/> } />
          <Route path="client/acceldata"  exact element={ <Acceldata/> } />
      </Routes>
      
    </div>
  )
}

export default App