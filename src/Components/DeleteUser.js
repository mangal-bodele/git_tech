import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function DeleteUser() {

    const [users, setUsers] = useState({});
    const navigate = useNavigate();

    async function fetchData() {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        setUsers(response.data);
    }

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navigate('/show')
    }

    useEffect(() => {    
        fetchData();
    }, []);
  return (
    <div>
        <h1>Do you really want to delete {users.name}</h1>
        <button onClick={()=>{deleteUser}}>YES</button>
        <button><NavLink to='/show'>NO</NavLink></button>
        
    </div>
  )
}

export default DeleteUser