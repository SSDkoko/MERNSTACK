import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

const OneProduct = () => {
    
    const { id } = useParams();
    const history = useHistory();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const deleteProduct = () => {
        
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="oneProduct-component">
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    );
};

export default OneProduct;
