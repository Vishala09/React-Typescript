import React, { useRef, useState } from 'react'
import { TodoModel } from './Model'

interface Props{
    todo:TodoModel;
    id:Number;
    handleDone:(id:number)=>void;
    handleDelete:(id:number)=>void;
    handleEdit:(id:number,name:string)=>void;
}

const TodoCard = ({todo,id,handleDone,handleDelete,handleEdit}:Props) => {

 
  const [edit,setEdit] = useState<boolean>();
  const [editedName, setEditedName] = useState<string>("");
  const formSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      handleEdit(+id,editedName);
      setEdit(false);
  }
  const ref=useRef<HTMLInputElement>(null);
  return (
    <form className='myCard container-fluid' onSubmit={formSubmit}>
        <div className='row'>
           {
              todo.isDone==false ?
              <>
                 {
                    edit ?
                        <input ref={ref} className='col-2' placeholder='Press Enter to Set' type="text" onChange={(e)=>setEditedName(e.target.value)} value={editedName}  /> 
                    :
                    <>
                        <div  className='col-3 bg-primary'>{todo.name}</div>
                    </>
                  }
                  <button className='col-2' type="button" onClick={()=>{setEdit(true);ref.current?.focus()}}>Edit</button>
                  <button className='col-2' type="button" onClick={()=>handleDone(+id)}>Done</button>
           
              </>
              :
              <>
                 {
                    <>
                      <div  className='col-3 bg-primary'>{todo.name}</div>
                      <div className='col-3 bg-success'> Done </div>
                    </>
                  }
              </>
           }
        </div>
    </form>
  )
}

export default TodoCard
