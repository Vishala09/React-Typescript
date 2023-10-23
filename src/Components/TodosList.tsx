import React from 'react'
import { TodoModel } from './Model'
import TodoCard from './TodoCard';

type Props = {
    todos:TodoModel[];
    setTodos:React.Dispatch<React.SetStateAction<TodoModel[]>>;
    handleDone:(id:number)=>void;
    handleDelete:(id:number)=>void;
    handleEdit:(id:number,name:string)=>void;
}

const TodosList = ({todos,setTodos,handleDone,handleDelete,handleEdit}:Props) => {
  return (
    <div key={'todos'}>
    {
        todos.map((todo)=><div key={todo.name}>
            <TodoCard handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit} id={todo.id} todo={todo} />
        </div>)
    }
    </div>
  )
}

export default TodosList
