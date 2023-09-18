import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const DisplayAll = () => {
    
    const [productList, setProductList] = useState([]);
    const history = useHistory();

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                
                setProductList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(() => {
                
                setProductList(productList.filter((product) => product._id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <header>All Products:</header>

            {
                productList.map((product) => (
                    <div key={product._id}>
                        {/* Link to view the product details */}
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <br />

                        {/* Link to edit the product */}
                        <button onClick={() => history.push(`/product/edit/${product._id}`)}>
                            Edit
                        </button>

                        {/* Button to delete the product */}
                        <button onClick={() => deleteProduct(product._id)}>
                            Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;
