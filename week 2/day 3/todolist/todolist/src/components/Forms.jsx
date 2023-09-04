import React, { useState } from "react";

const Form = ({ todoList, setTodoList }) => {
  const [todoText, setTodoText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 100000000).toString();

    setTodoList([
      ...todoList,
      {
        content: todoText,
        markedDelete: false,
        id: id,
      },
    ]);

    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
