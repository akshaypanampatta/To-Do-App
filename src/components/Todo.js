import React, { useState } from "react";
import "./Todo.css";


function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onSub = () => {
    setTodos([...todos, {list:todo,id:Date.now()}]);
    setTodo('')
    
  };

  const deletetodo=(id)=>{
   
    setTodos(todos.filter((too) => too.id !== id));

  }

  return (
    <div className="container">
      <h2>TODO APP</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text "
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter your todo"
        />
        <button onClick={onSub}>ADD</button>
      </form>
      <div>
        <ul>
          {todos.map((to)=>(
            <li>{to.list}<button onClick={()=>deletetodo(to.id)}>Delete</button></li>     
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
