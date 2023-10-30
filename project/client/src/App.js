import React from 'react';
import { Routes, Link,  Route } from 'react-router-dom';
import './App.css';
import CreateStore from './components/CreateStore';
import AllStore from './components/AllStore';
import OneStore from './components/OneStore';
import EditStore from './components/EditStore';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <h1>Notes</h1>
      <Link to="/">go back home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


      <Routes>
        {/* <Route path="/" element={<AllStores />} /> */}
        <Route path="/create" element={<CreateStore />} />
        <Route path="/" element={<AllStore />} />
        

        <Route path="stores/:id/edit" element={<EditStore />} />
        <Route path="/stores/:id" element={<OneStore />} />
        
        <Route path="/login" element={<Login />} />
        <Route path='/Signup' element={<Signup />} />



        

      </Routes>


    </div >
  );
}

export default App;