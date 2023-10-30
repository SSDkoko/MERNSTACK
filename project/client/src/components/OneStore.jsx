import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneStore = () => {
    const { id } = useParams();
    const [OneStore, setOneStore] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:5002/api/stores/${id}`)
        .then(res=>{
            console.log(res);
            setOneStore(res.data[0])})
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <p>{OneStore.StoreName}</p>
      <p>{OneStore.StoreNumber}</p>
      <p>{OneStore.Open}</p>
      <Link to={`/stores/${OneStore._id}/edit`} className='btn btn-warning'>Update Store</Link>
    </div>
  )
}

export default OneStore
