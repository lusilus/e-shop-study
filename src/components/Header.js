import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import {BsCart} from 'react-icons/bs'
// import { useState } from 'react'
import { EshopContext } from './pages/Context'

export default function Header() {
    // let [counter, setCounter] = useState([])
    const {globalState} = useContext(EshopContext)
    
    // function hendleCartCounter(item){
    //     const copyCounter = [...counter]
    //        copyCounter.push(item)
    //        setCounter(copyCounter)   
    //     }
    
  return (
    <div>
        <header className='bg-orange-600'>
           
           <ul className="menu">
               <li >
               { <img className='logo' src='https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/525858954db2db7a24eb0d1070d316de.png' alt= "" /> }
               
               </li>
               <Link to="/">
                   <li className="menuItem">Home</li>
               </Link>
               <Link to="/categories">
                   <li className="menuItem">Categories</li>
               </Link>
               <Link to="/deals">
                   <li className="menuItem">Deals</li>
               </Link>
               <Link to="/contact">
                   <li className="menuItem">Contact</li>
               </Link>
               <Link to="/addnewproduct">
                   <li className="menuItem">Add New Product</li>
                </Link>
                <Link to="/editproduct">
                   <li className="menuItem">Edit Product</li>
                </Link>
                <Link to='/cart'>
                   <li>
                     <BsCart 
                        className='cart ' 
                        //  onClick={} 
                    />
                     <h3 
                     //need to fix that {cart.lentgh} -> undifined:
                        className='cart' >{globalState.cart.length}</h3>
                   </li>
                </Link>
                 
           </ul>
          
       </header>
      
    </div>
  )
}
