import React from 'react'

type Props = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit : (e:React.FormEvent) => void
} & React.ComponentProps<'div'>

const Todo = ({state,setState,handleSubmit} : Props) => {
  return (
    <div>
        <input 
        placeholder='Enter a Todo' 
        type="text" 
        value={state} 
        onChange={(e)=>setState(e.target.value)} />
        <button type='submit' onClick={(e)=>handleSubmit(e)}>Add</button>
    </div>
  )
}

export default  Todo
