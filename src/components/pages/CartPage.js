import React, { useContext } from 'react'
import { EshopContext } from './Context'


export default function CartPage() {
const {globalState, dispatchState} = useContext(EshopContext)
console.log('hello from card page')

  const handleDelete = (idx) => {
    dispatchState({
    type: 'deleteFromCart',
    payload: idx
   })
  }
  return (
    <>
    <h1 className='flex justify-center m-3 font-bold text-lg'>Your Cart</h1>
    <div className='flex flex-col w-[500px] items-center m-3 space-y-4'>
        
        {
          globalState.cart.map((item,idx)=> <div 
          className='w-[450px] h-[250px] m-9 bg-slate-200 drop-shadow-md rounded-lg p-5' key={idx}>
                {item.name} {item.descr} {item.price} 
                <button 
                onClick={() => handleDelete(idx)}
                className='m-5'>X</button>
               
                
            </div>)
        }
        
    </div>
    </>
  
     
  
  )
}

