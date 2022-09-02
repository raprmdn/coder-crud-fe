import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";

const UserList = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);


    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1>User List</h1>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ user.name }</td>
                                        <td>{ user.email }</td>
                                        <td>{ user.gender }</td>
                                        <td>
                                            <Button variant="primary" className="btn-sm me-1">Edit</Button>
                                            <Button variant="danger" className="btn-sm">Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserList;
