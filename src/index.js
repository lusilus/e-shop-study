import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/pages/Categories'
import Contact from './components/pages/Contact'
import AddNewProduct from './components/pages/AddNewProduct';
import Header from './components/Header';
import EshopContextProvider from './components/pages/Context';
import EditProduct from './components/pages/EditProduct'
import CartPage from './components/pages/CartPage'
import ThankYou from './components/pages/ThankYou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EshopContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/categories' element ={< Categories />} />  
        <Route path='/contact' element={<Contact />} />
        <Route path='/addnewproduct' element={<AddNewProduct/>} />
        <Route path='/editproduct' element={<EditProduct/>} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path="/ThankYou" element={<ThankYou/>} />

      </Routes>
    </BrowserRouter>
  </EshopContextProvider>
  
);

reportWebVitals();
