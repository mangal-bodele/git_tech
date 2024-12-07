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
                    {
                        user.map{
                            return{
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contact}</td>
                                    <td>{user.address}</td>
                                    <td>{user.city}</td>
                                    <td>
                                        <button><NavLink</button>
                                    </td>
                                </tr>
                            }
                        }
                    }

                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default ShowUsers