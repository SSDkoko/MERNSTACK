import React, { useState } from 'react';

const PersonCard = (props) => {
  const [age, setAge] = useState(props.age); 

  const increaseAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="person-card">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hair}</p>
      <button onClick={increaseAge}>Birthdaybutton</button>
    </div>
  );
};

export default PersonCard;
