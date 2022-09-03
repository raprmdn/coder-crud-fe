import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ gender, setGender ] = useState('Male');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users', {
                name,
                email,
                gender
            });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="container mt-5">
               <div className="row">
                   <div className="col-lg-8">
                       <div className="card">
                           <div className="card-header">
                               <h4>Add User</h4>
                           </div>
                           <div className="card-body">
                               <form onSubmit={submit}>
                                   <div className="form-group mb-3">
                                       <label htmlFor="name" className="mb-1">Name</label>
                                       <input type="text"
                                              className="form-control"
                                              id="name"
                                              name="name"
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}
                                              placeholder="Enter name" />
                                   </div>
                                   <div className="form-group mb-3">
                                       <label htmlFor="email" className="mb-1">Email</label>
                                       <input type="email"
                                              className="form-control"
                                              id="email"
                                              name="email"
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                              placeholder="Enter email" />
                                   </div>
                                   <div className="form-group mb-3">
                                       <label htmlFor="gender" className="mb-1">Gender</label>
                                       <select className="form-select mb-3"
                                               value={gender}
                                               onChange={(e) => setGender(e.target.value)}>
                                           <option value="Male">Male</option>
                                           <option value="Female">Female</option>
                                       </select>
                                   </div>
                                   <Button variant="primary" type="submit" className="btn-sm me-2">
                                       Submit
                                   </Button>
                                   <Link to={'/'} className="btn btn-warning btn-sm">Back</Link>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </>
    );
};

export default AddUser;
