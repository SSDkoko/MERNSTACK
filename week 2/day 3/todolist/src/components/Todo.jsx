import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { FaTrash } from 'react-icons/fa';

const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      setList([...list, { content: input, id: uuid(), isDone: false }]);
      setInput("");
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  const deleteTask = (id) => {
    setList(list.filter(task => task.id !== id));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div className='main'>
        <div className='form'>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Add new task"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <input type="submit" value="add" />
          </form>
          <div className='tasks'>
            {list.map((task) => (
              <div key={task.id} className="task">
                <p
                  style={
                    task.isDone
                      ? { textDecoration: 'line-through' }
                      : { textDecoration: 'none' }
                  }
                >
                  {task.content}
                </p>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => {
                    setList(prevState => {
                      const newList = prevState.map(item =>
                        item.id === task.id
                          ? { ...item, isDone: !item.isDone }
                          : item
                      );
                      return newList;
                    });
                  }}
                />
                <FaTrash
                  onClick={() => deleteTask(task.id)}
                  className="trash"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
