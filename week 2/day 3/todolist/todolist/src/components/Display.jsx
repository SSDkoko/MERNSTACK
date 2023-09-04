import React from "react";

const Display = ({ todoList, setTodoList }) => {
  const handleCompleted = (todo) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === todo.id ? { ...item, markedDelete: !item.markedDelete } : item
    );

    setTodoList(updatedTodoList);
  };

  const styled = (markedDelete) => {
    return markedDelete ? "completed" : "notCompleted";
  };

  const deleteButton = (idFromBelow) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== idFromBelow);

    setTodoList(updatedTodoList);
  };

  return (
    <div>
      {todoList.map((todo) => (
        <div className={styled(todo.markedDelete)} key={todo.id}>
          <p>{todo.content}</p>
          <input
            type="checkbox"
            checked={todo.markedDelete}
            onChange={() => handleCompleted(todo)}
          />
          <button onClick={() => deleteButton(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Display;
