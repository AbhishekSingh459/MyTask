import { useState } from "react"
import "./AddTask.css"
import remove from "./remove.png"
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
  let [Todo,setTodo]=useState([{task:"Sample Task",id:uuidv4()}]);
  let [newTodo,setnewTodo]=useState("");
  
  let AddNewTask = () =>{
    setTodo([...Todo,{task:newTodo,id:uuidv4()}]);
    setnewTodo("");
  }
  function UpdateTodoValue(event){
    setnewTodo(event.target.value);
  }
  let DeleteTodo = (id) =>{
    setTodo(Todo.filter((todo) => todo.id!= id));
  }
  return (
    <>
    <div id='AddTask'>
        <input type="text" name="" id="inputbox" value={newTodo} onChange={UpdateTodoValue} placeholder='Add Task..'/>
        <button id='Addbtn'onClick={AddNewTask}>Add</button>
    </div>
    <div id="Tasklist">
      <ul>
        {Todo.map((todo)=>{
          return <li className="list" key={todo.id}>
            <div className="item">
            <span>{todo.task}</span>
            <button className="removeBtn" onClick={()=>DeleteTodo(todo.id)}><img src={remove} id="remove_img" alt="" /></button>
            </div>
            </li>
        })}
      </ul>
    </div>
    </>
  )
}

export default AddTask