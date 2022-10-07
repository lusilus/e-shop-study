import React from 'react'
import { useEffect, useRef, useState } from 'react'

export default function ContactForm() {

  const reference = useRef([])
  const [userContactForm, setUserContactForm] = useState({
    name:"",
    email: "",
    department: "",
    message: "",
    subject: ""
  })
  const [gender, setGender] = useState()
  

  useEffect(() => {
    reference.current[0].focus()
  },[])

  const handleKey = e => {
if (e.key === 'Enter') reference.current[1].focus()
  }

  const handleGender = e => setGender(e.target.value)
  
  console.log(userContactForm)
  console.log(gender)


  return (
    <>
   
      <form className='m-9'>
        
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Full Name
          </span>
          <input onKeyPress={handleKey} ref={ el => reference.current[0] = el} type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1" placeholder="Type Your Full Name" 
          onChange={e => setUserContactForm({...userContactForm, name:e.target.value})}/>
        </label>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Email
          </span>
          <input  ref={ el => reference.current[1] = el} type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" 
          onChange={e => setUserContactForm({...userContactForm, email:e.target.value})}/>
        </label>
        <select
        className='m-1  text-slate-700 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1'
        value={userContactForm.department}
        onChange={e => setUserContactForm({...userContactForm, department:e.target.value})}>
          <option 
            value="">Select Department
          </option>
          <option  
            value="Marketing">Marketing
          </option>
          <option 
            value="Sales">Sales 
          </option>
          <option  
            value="Warehouse">Warehouse
          </option>
          <option  
            value="Order">Order
          </option>
        </select>
        <textarea
        className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1'
        placeholder='Please write your message'
        value={userContactForm.message}
        onChange={e => setUserContactForm({...userContactForm, message:e.target.value})}/>
          <h2 className='text-sm font-medium text-slate-700'>Gender</h2>
          <label className='text-sm font-medium text-slate-700 p-3'> 
            <input 
              name='gender'
              type= 'radio'
              value='female'
              checked={gender === 'female'}
              onChange={handleGender}
            />Female
          </label>
          <label className='text-sm font-medium text-slate-700 p-3'> 
            <input 
              name='gender'
              type= 'radio'
              value='male'
              checked={gender === 'male'}
              onChange={handleGender}
            />Male
          </label>
          <label className='text-sm font-medium text-slate-700 p-3'> 
            <input 
              name='gender'
              type= 'radio'
              value='N/A'
              checked={gender === 'N/A'}
              onChange={handleGender}
            />N/A
          </label>
          <select
        className='m-1  text-slate-700 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[250px] rounded-md sm:text-sm focus:ring-1'
        value={userContactForm.subject}
        onChange={e => setUserContactForm({...userContactForm, subject:e.target.value})}>
          <option 
            value="">select your subject
          </option>
          <option  
            value="refound">refound
          </option>
          <option 
            value="General Question">General Question
          </option>
          <option 
            value="shipping">Shipping
          </option>
          
        </select>
      </form>

    

    </>
    
  )
}
