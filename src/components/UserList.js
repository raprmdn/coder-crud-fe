import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const UserList = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getUsers();
        console.log('i fire once');
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            getUsers();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1>User List</h1>
                        <Link to={'/users/create'} className="btn btn-primary btn-sm mb-2">Create User</Link>
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
                                            <Link to={`/users/${user.id}`} className="btn btn-primary btn-sm me-1">Edit</Link>
                                            <Button onClick={(e) => deleteUser(user.id)}
                                                    variant="danger"
                                                    className="btn-sm">Delete</Button>
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
