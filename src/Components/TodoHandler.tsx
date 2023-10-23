import React , {useState} from 'react'
import Todo from './Todo';
import { TodoModel } from './Model';
import TodosList from './TodosList';


function TodoHandler ()  {

  const [state,setState] = useState<string>("");
  const [todos, setTodos] = useState<TodoModel[]>([]);
  const handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      if(state)
      {
        let todoObj:TodoModel= {id:todos.length,name:state,isDone:false}
        todos.push(todoObj);
        setTodos([...todos]);
        setState("");
      }
  }
  const handleDelete = (id:number) => {
    delete todos[id];
  }
  const handleDone = (id:number) => {
    todos[id].isDone = true;
    setTodos([...todos])
  }
  const handleEdit = (id:number,name:string) => {
    todos[id].name = name;
  }
  return (
    <div style={{margin:'10px'}} className='myCard'>
        <Todo onClick={()=>{}} state={state} setState={setState} handleSubmit={handleSubmit}  />
        <TodosList  handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}  setTodos={setTodos} todos={todos} />
    </div>
  )
}

export default TodoHandler
