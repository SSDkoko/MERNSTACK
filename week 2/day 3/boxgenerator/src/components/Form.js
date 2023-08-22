// Import the React library and 'useState' hook from 'react'
import React, { useState } from 'react';

// Define a functional component named 'Form'
const Form = (props) => {
  // Destructure the 'boxColorArray' and 'setBoxColorArray' props from the 'props' object
  const { boxColorArray, setBoxColorArray } = props;

  // Create a state variable named 'color' and a function 'setColor' to update it
  // This state will be used to track the input value of the color text box
  const [color, setColor] = useState("");
  
  // Define a function to handle form submission
  const submitHandler = (event) => {
    // Prevent the default form submission behavior to avoid page refresh
    event.preventDefault();

    // Add the new color to the 'boxColorArray' without losing existing colors
    // Create a new array by spreading the existing colors and adding the new color
    setBoxColorArray([...boxColorArray, color]);
  }

  return (
    <div>
      { /* Form for adding colors */ }
      <form onSubmit={submitHandler} style={{ margin: "20px" }}>
        <div>
          <label htmlFor="color">Color</label>
          <input 
            type="text" 
            name="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
}

// Export the 'Form' component so it can be used in other files
export default Form;
