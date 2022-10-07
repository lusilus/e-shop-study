import React from 'react'
import { useState, useEffect } from 'react'


export default function Categories() {
  const [meme, setMeme] = useState({})
  const [userInput, setUserInput]= useState({
    topText: "",
    bottonText: ""
  })
 
  useEffect(()=>{
    async function getData(){
        try{
            const result =  await fetch('https://api.imgflip.com/get_memes')
            const data = await result.json()
            //console.log('data is ', data.data.memes[0].url)
            const idx =  Math.floor(Math.random()* 20) 
             console.log(idx)
         
            setMeme(data.data.memes[idx].url)
        } catch (error){
            console.log('worng path')
        }
    }
    getData()
},[]);

  const handleClick = ()=> {
    const newMeme = meme
    console.log(newMeme)
   
   
  }

  return (
    <div className='flex justify-center items-center flex-col m-5 '>   
      <h1 className='text-[48px] font-bold'>Meme factory</h1>

        <p>Type your top line:</p>
        <input type = 'text' placeholder=' type top line' toptext="title" className='m-3' onChange={e => setUserInput({...userInput, topText:e.target.value})}/>
        <p>Type your botton line:</p>
        <input type = 'text' placeholder=' type button line'  bottontext="joke" className='m-3 ' onChange={e => setUserInput({...userInput,  bottonText:e.target.value})}/>
        <div id= "memeFont">
          <div className='w-[550px] h-[550px] bg-slate-300 drop-shadow-md flex justify-center items-center flex-col'>
            
            <p className='text-[36px] font-bold text-shadow: [-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black] uppercase
            text-amber-500 tracking-wide'>{userInput.topText}</p>
          
            <div className='w-[300px] h-auto flex m-9'>
                <img src={meme} alt="" />
            </div>
            <p className='text-[36px] font-bold text-shadow: [-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black] uppercase
          text-amber-800 tracking-wide'>{userInput.bottonText}</p>
            </div>
          </div>

        <button 
        onClick={handleClick}
        className = 'bg-orange-600 hover:bg-orange-300 w-[150px] h-[30px] rounded-lg m-9'>Change Meme</button>
    </div>
  )
}


