import { useState, useEffect } from "react";
import "./AddTask.css";
import remove from "./remove.png";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  // Load saved tasks from localStorage
  const [Todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState("");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todo));
  }, [Todo]);

  let AddNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodo([...Todo, { task: newTodo, id: uuidv4(), isdone: false }]);
    setNewTodo("");
  };

  function UpdateTodoValue(event) {
    setNewTodo(event.target.value);
  }

  let DeleteTodo = (id) => {
    setTodo(Todo.filter((todo) => todo.id !== id));
  };

  let UpdateUpperCase = (id) => {
    setTodo((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
      )
    );
  };

  let MarkAsDone = (id) => {
    setTodo((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: true } : todo
      )
    );
  };

  return (
    <>
      <div id="AddTask">
        <input
          type="text"
          id="inputbox"
          value={newTodo}
          onChange={UpdateTodoValue}
          placeholder="Add Task.."
        />
        <button id="Addbtn" onClick={AddNewTask}>
          Add
        </button>
      </div>
      <div id="Tasklist">
        <ul>
          {Todo.map((todo) => (
            <li
              className="list"
              key={todo.id}
              style={todo.isdone ? { textDecoration: "line-through" } : {}}
            >
              <div className="item">
                <span>{todo.task}</span>
                <button
                  onClick={() => MarkAsDone(todo.id)}
                  className="MarkAsDone"
                >
                  MarkAsDone
                </button>
                <button
                  onClick={() => UpdateUpperCase(todo.id)}
                  className="UpperCaseBtn"
                >
                  UpperCase
                </button>
                <button
                  className="removeBtn"
                  onClick={() => DeleteTodo(todo.id)}
                >
                  <img src={remove} id="remove_img" alt="Remove" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddTask;