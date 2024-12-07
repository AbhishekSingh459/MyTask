import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyTask from './MyTask'
import "./Task.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyTask/>
  </StrictMode>,
)
