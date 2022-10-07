import React, { useState, useContext } from 'react'
import { EshopContext } from './Context'


export default function EditProduct(props) {
const {globalState, dispatchState} = useContext(EshopContext)

//local state:
  const [localProduct, setLocalProduct]= useState({
      name: "",
      descr: "",
      price: 0,
  })

  const [localIdx, setLocalIdx] = useState(-1)

  const handleSave = async () => {
  
    
      try {
      
        dispatchState({
            type: 'addProduct',
            payload: localProduct
          })



      }catch (error){
        console.log('Error sending data', error.message)
      }

  }

 //axios.post('url',data)

  

  const handleDelete = (idx) => {
    dispatchState({
    type: 'deleteProduct',
    payload: idx
   })
  }

  const handleEdit = (idx) => {
    dispatchState({
    type: 'editProduct',
    payload: {
        idx: localIdx,
        product: localProduct

    }
   })
  }

  const handleValue = (product, idx) => {
    setLocalProduct({...product})
    setLocalIdx(idx)
  }
  return (

    <div className='flex flex-col w-[500px] items-center m-3 space-y-4'>
        {
            globalState.products.map((item,idx)=> <div className='w-[450px] h-[250px] m-9 bg-slate-200 drop-shadow-md rounded-lg p-5'
            key={idx}>
                <p className='font-bold'>{item.name}</p> <p>{item.descr}</p> <p>{item.price}</p> 
                <button 
                onClick={() => handleDelete(idx)}
                className='m-5'>X</button>
                <button 
                onClick={() => handleValue(item, idx)}
                className='m-5'>Edit</button>
                
            </div>)
        }
      <button 
      className = 'bg-orange-600 hover:bg-orange-300 w-[50px] h-[30px] rounded-lg m-3'
      onClick={handleSave}>Save</button>
      <hr/>
      <input placeholder="name" value={localProduct.name} onChange={e => setLocalProduct({...localProduct, name:e.target.value})}
      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"/>
      <input placeholder="desription" value={localProduct.descr} onChange={e => setLocalProduct({...localProduct, descr:e.target.value})}
      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"/>
      <input placeholder="price" value={localProduct.price} onChange={e => setLocalProduct({...localProduct, price:e.target.value})}
      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1"/>
      <div>
      <button 
      className = 'bg-orange-600 hover:bg-orange-300 w-[150px] h-[30px] rounded-lg m-3'
      onClick={handleEdit}>Save Edit</button>

      </div>
    </div>
  
     
  
  )
}

