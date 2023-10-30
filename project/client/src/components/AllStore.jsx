import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const AllStore = () => {
    const [allStores, setAllStores] = useState([]);
    const [deleted, setDeleted]=useState(false)
    const nav = useNavigate()
const deletStore = (id)=>{
    axios.delete(`http://localhost:5002/api/stores/${id}`)
    .then(res=>setDeleted(!deleted)).catch(err=>console.log(err))
}
    useEffect(() => {
        axios.get("http://localhost:5002/api/stores")
            .then(res => {
                console.log(res.data);
                setAllStores(res.data)
            })
            .catch(err => console.log(err))
    }, [deleted]);
    
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                <h1>Store Finder</h1>
                </div>
                <div>
                <Link to="/create">Add a store</Link>
                </div>
            </div>
            <br />
            <br />
            
            <table style={{ fontSize: "3rem", borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black" }}>Store</th>
                        <th style={{ border: "1px solid black" }}>Store Number</th>
                        <th style={{ border: "1px solid black" }}>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {allStores.map((OneStore, index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid black" }}><Link to={"/stores/"+OneStore._id}>{OneStore.StoreName}</Link></td>
                            <td style={{ border: "1px solid black" }}>{OneStore.StoreNumber}</td>
                            <td style={{ border: "1px solid black" }}>

                                <button onClick={()=>deletStore(OneStore._id)}>Remove</button>
                                {/* <Link to={`/pets/update/${pet._id}`}>Edit</Link> &nbsp; 
                                <Link to={`/pets/${pet._id}`}>Details</Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllStore;
