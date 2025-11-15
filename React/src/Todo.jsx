import React, { useState } from 'react'

export const Todo = () => {
  const [text,setText] = useState('')
  const [todos,setTodos] = useState([])

  const handleAdd = () =>{
    if(!text.trim()) return
    setTodos([...todos,text])
    setText('')
  }
  return (
    <div>
     <input type="text" name="" id="" value={text} onChange={(e)=>
      setText(e.target.value)}/>
     <button onClick={handleAdd}>Add</button>

     <ul>
      {todos.map((todo,index)=> 
      <li key={index}>{todo}</li>
      )}
     </ul>
    </div>
  )
}
