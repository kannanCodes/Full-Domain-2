import { useState } from "react"

export const Form = () =>{
     const [text,setText]= useState('')
     const handleChange = (e)=>{
          setText(e.target.value)
     }
     return (
          <div>
               <h1>{text}</h1>
               <input type="text" placeholder="name" value={text}
               onChange={handleChange}
               />
          </div>
     )
}