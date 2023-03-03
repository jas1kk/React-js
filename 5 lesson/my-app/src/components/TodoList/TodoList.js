import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
      
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  const getEmailOrPhone = (user) => {
    return user.email || user.phone;
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ color: todo.completed ? "green" : "black" }}>
            {todo.title} - 
            {getUserById(todo.userId).name} - 
            {getEmailOrPhone(getUserById(todo.userId))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
