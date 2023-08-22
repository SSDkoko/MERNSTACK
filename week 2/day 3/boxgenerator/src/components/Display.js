// Import the React library, which is needed to create React components
import React from 'react';

// Define a functional component named 'Display'
const Display = (props) => {
  // Destructure the 'boxColorArray' prop from the 'props' object
  const { boxColorArray } = props;

  /* 
    Render the colored boxes using the 'map' function on the 'boxColorArray'
    Each color in the array will be used to create a colored box
  */
  return (
    <div>
      { /* Use the 'map' function to iterate over the 'boxColorArray' */ }
      {
        boxColorArray.map((color, index) => (
          <div key={index} style={{ 
              display: "inline-block",
              margin: "10px",
              height: "50px", 
              width: "50px", 
              backgroundColor: color
              }}>
          </div>
        ))
      }
    </div>
  );
}

// Export the 'Display' component so it can be used in other files
export default Display;
