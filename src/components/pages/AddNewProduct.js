import React, { useState, useContext } from 'react'
import { EshopContext } from './Context'


export default function AddNewProduct(props) {

  const colors = [ "Pink" , "Red", "Black", "Sky blue", "White", "Golden"]

const {globalState, dispatchState} = useContext(EshopContext)
//local state:
  const [product, setProduct]= useState({
      name: "",
      description: "",
      price: 0,
      category: "",
      feature: false,
      colorsProp: new Array(colors.length).fill(false)
  })

  const handleSave = async () => {
    console.log(product) 


    const newProduct = {...product}

    newProduct.colorsProp = colors.filter((item, idx) => product.colorsProp[idx] === true)
    
    console.log(newProduct.colors)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(newProduct),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
          
        })
        const data = await response.json();
          console.log(data)
          dispatchState({
            type: 'addProduct',
            payload: product
          })



      }catch (error){
        console.log('Error sending data', error.message)
      }

  }

 //axios.post('url',data)

  const handleColorChange = ( idx) => {
    const oldColors=[...product.colorsProp]
    oldColors[idx] = !oldColors[idx]
    setProduct({...product, colorsProp: [...oldColors]})
  }
  return (

    <div className='flex flex-col w-[500px] items-center m-3 space-y-4'>
      <div>
        <input 
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"
         
          type="text" 
          placeholder='Product Name' 
          value={product.name} 
          onChange={e=> setProduct({...product, name: e.target.value})}
        />
      </div>
      <div >
        <textarea className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"
          placeholder='Description' 
          value={product.description} 
          onChange={e=> setProduct({...product, description: e.target.value})}
        />
      </div>
      <div>Price:
        <input 
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"
          type="number" 
          placeholder='0' 
          value={product.price} 
          onChange={e=> setProduct({...product, price: e.target.value})}
        />
      </div>
      <div>Product Category:
        <select
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"
          placeholder='choose a category' 
          value={product.category} 
          onChange={e=> setProduct({...product, category: e.target.value})}>
            <option value="">Select Category</option>
            <option value="Mobile phone">Mobile phone</option>
            <option value="Mobile accessory">Mobile accessory</option>
            <option value="Smartwatch">Smartwatch</option>

        </select>
      </div>
      <div className='flex w-[400px]'>Feature:
        <input 
          className='border border-orange-600 hover:border-orange-300'
          type="checkbox"
          checked={product.feature}
          onChange={e=> setProduct({...product, feature: e.target.checked})}
        />
      </div>
      <div>
        Choose avalible colors:
        {
          colors.map((item, idx) => (
            <div key={idx}>
             <input type="checkbox" checked={product.colorsProp[idx]} onChange={()=>{handleColorChange(idx)}}/> {item}
            </div>
          ))
        }
      </div>
      <button 
      className = 'bg-orange-600 hover:bg-orange-300 w-[50px] h-[30px] rounded-lg m-3'
      onClick={handleSave}>Save</button>

     
    </div>
  )
}
 /* 
   
  
   7. A save button. When clicked the product should be added to the products array. (You should import it in this file as well beside the homepage) */
