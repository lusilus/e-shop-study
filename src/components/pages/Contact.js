import React from 'react'
import { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import ThankYou from './ThankYou'
import ContactForm from '../ContactForm'



export default function Contact() {

  const reference = useRef([])
  const [userContactForm, setUserContactForm] = useState({
    name:"",
    email: "",
    department: "",
    message: "",
    subject: ""
  })
 
  const [state, setState]= useState(false)

  const handleClick = ()=>{
      console.log('hello from click')
  
      state ? <ContactForm info={userContactForm}/> : <ThankYou info={userContactForm}/>
    
   
  }

  return (
    <>
    <div className='bg-indigo-100 min-h-screen max-w-full '>
      <h1 className='flex items-center text-[35px] justify-center ' >Contact Us</h1>
      <ContactForm />

      <button
      className = 'bg-orange-600 hover:bg-orange-300 w-[150px] h-[30px] rounded-lg m-9'
      onClick={handleClick}
      >Send</button>

        {/*
         if state is true render form and if it flase render <thankyou></thankyou> */}


      {/* <Link to="/ThankYou">
        <button
      className = 'bg-orange-600 hover:bg-orange-300 w-[150px] h-[30px] rounded-lg m-9'
      >Send</button>
       </Link> */}
       <ThankYou name={userContactForm.name}/>

       
     

     
      
      </div>

    </>
    
  )
}
