import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

const EditStore = () => {

    const [StoreName, setStoreName] = useState("")
    const [StoreNumber, setStoreNumber] = useState("")
    const [Open, setOpen] = useState(true)
    const [errors, setErrors] = useState([]);
    const {id}=useParams()

    const nav = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:5002/api/stores/${id}`)
        .then(res => {
            console.log(res.data);
            setStoreName(res.data[0].StoreName)
            setStoreNumber(res.data[0].StoreNumber)
            setOpen(res.data[0].Open)
            // nav("/")
        }).catch(err =>
            console.log(err))},[])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(StoreName, StoreNumber, Open)
        const objToBeSent = {
            StoreName,
            StoreNumber,
            Open
        };
        axios.put("http://localhost:5002/api/stores/"+id, objToBeSent)
            .then(res => {
                console.log(res.data);
                nav('/stores/'+res.data._id)
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // // Set Errors
                setErrors(errorArr);

            })
    }

    return (
        <div>
            Create
            <p style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</p>


            <form onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label className='form-label'>Name :</label>
                    <input type="string" onChange={(e) => { setStoreName(e.target.value) }} value={StoreName} />
                </div>
                <div className='form-group'>
                <label className='form-label'>Number :</label>
                <input type="number" onChange={(e) => { setStoreNumber(e.target.value) }} value={StoreNumber} />

                </div>

                <div className='form-group'>
                <label className='form-label'>open?</label>
                    <input type="checkbox" onChange={(e) => { setOpen(e.target.checked) }} value={Open} />
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditStore