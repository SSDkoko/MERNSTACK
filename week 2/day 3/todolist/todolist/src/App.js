import React, { useState } from "react";
import Form from "./components/Forms";
import Display from "./components/Display";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <h1>Todo List</h1>
      <Form todoList={todoList} setTodoList={setTodoList} />

      <h2>Tasks</h2>
      <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
