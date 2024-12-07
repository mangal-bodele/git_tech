import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function ShowUsers() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    async function fetchData() {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    useEffect(() => {    
        fetchData();
    }, []);
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>CONTACT</th>
                    <th>ADDRESS</th>
                    <th>CITY</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.contact}</td>
                    <td>{users.address}</td>
                    <td>{users.city}</td>
                    <td><button onClick={() => navigate(`/update/${users.id}`)}>Update</button>
                    <button onClick={() => navigate(`/delete/${users.id}`)}>Delete</button></td> 
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default ShowUsers