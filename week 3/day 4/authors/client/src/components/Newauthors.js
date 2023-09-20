import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const NewAuthors = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const addNewAuthor = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/authors', { Name: name });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    setName('');
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <h2>Add new author:</h2>
      <br />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={cancel}>Cancel</button>
      <button onClick={addNewAuthor}>Submit</button>
    </div>
  );
};

export default NewAuthors;
