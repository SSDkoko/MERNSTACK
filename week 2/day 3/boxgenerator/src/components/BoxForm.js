import React, { useState } from 'react';

const BoxForm = (props) => {
  const { boxArray, setBoxArray } = props;
  const [color, setColor] = useState("");
  
  const submitHandler = (event) => {
    event.preventDefault();

    setBoxArray([
      ...boxArray,
      {
        color: color
      }
    ]);
   
    setColor("");
  }

  return (
    <div>
      <form onSubmit={submitHandler} style={{ margin: "20px" }}>
        <div>
          <label>Color</label>
          <input 
            type="text" 
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

export default BoxForm;


