import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:5000/api/authors')
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.log('Error fetching authors:', error);
      });
  }, []);

  const deleteAuthor = (authorId) => {
    axios.delete(`http://localhost:5000/api/authors/${authorId}`)
      .then(() => {
        const updatedAuthors = authors.filter((author) => author._id !== authorId);
        setAuthors(updatedAuthors);
      })
      .catch((error) => {
        console.log('Error deleting author:', error);
      });
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to="/new">Add an author</Link>
      <h2>We have quotes by:</h2>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.Name}</td>
              <td>
                <Link to={`/edit/${author._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteAuthor(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
