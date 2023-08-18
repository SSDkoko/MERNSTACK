import React from 'react';

const PersonCard = (props) => {
  return (
    <div className="person-card">
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hair}</p>
    </div>
  );
};

export default PersonCard;