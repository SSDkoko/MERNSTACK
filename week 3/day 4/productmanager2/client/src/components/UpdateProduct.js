import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    
    const [headerTitle, setHeaderTitle] = useState("");

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const productData = res.data;
                setTitle(productData.title);
                setPrice(productData.price);
                setDescription(productData.description);
                setHeaderTitle(productData.title);
            })
            .catch((err) => console.log(err));
    }, [id]);

    
    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description,
        })
        .then(() => {
            navigate("/"); 
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <header>Edit {headerTitle}</header>

            <form onSubmit={submitHandler}>
                <div className="form-fields">
                    <label>Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Price</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Description</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />

                <input className="submit-input" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;
