import React from 'react'
import logo from "./task-list.png"
import "./Task.css"
import AddTask from './AddTask'
const MyTask = () => {
  return (
    <div id='hero'>
        <img src={logo} alt="" id='logo'/>
        <h1 id='name'>Task List</h1>
        <AddTask/>
    </div>
  )
}

export default MyTask