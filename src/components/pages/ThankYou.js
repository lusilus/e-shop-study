import React from 'react'

export default function ThankYou(userContactForm) {
    // console.log('gender is', gender)
    console.log( userContactForm)
    
  return (
    <div className='w-[450px] h-[350px] m-9 bg-slate-200 drop-shadow-md rounded-lg p-5'>
        <h1 className='flex items-center justify-center font-bold'>Thank You for contact us!</h1>
        <h2 className='font-bold pb-3'> You Information is:</h2>
        <p>Full Name: {userContactForm.name}</p>
        <p>Email: {`${userContactForm.email}`}</p>
        <p>Department: {`${userContactForm.department}`}</p>
        {/* <p>Gender: {`${gender}`}</p> */}
        <p>Subject: {`${userContactForm.subject}`}</p>
        <p>Message: {`${userContactForm.message}`}</p>
    </div>
  )
}
