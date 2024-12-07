import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
    const [register,handleSubmit,setValue] = useForm();
    const naviGate = useNavigate()
    const userId = useParams()

    async function fetchData() {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        setUsers(response.data);
    }
    

    function saveData(data){
        const res = axios.put(`http://localhost:5000/users/${userId}`,data)
        setValue("Id",res.data.id),
        setValue("name",res.data.name),
        setValue("email",res.data.email),
        setValue("contact",res.data.contact),
        setValue("address",res.data.address),
        setValue("city",res.data.city),
    }

    useEffect(() => {    
        fetchData();
    }, []);

  return (
    <>
    <div>
        <h1>UpdateUser</h1>
        <form  onSubmit={handleSubmit(saveData)}>
            <label htmlFor="Id">Id</label>
            <input type="number" id='Id'{...register("Id")}>enter Id</input>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name' {...register("name")}>enter Name</input>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email' {...register("email")}>enter Email</input>
            <label htmlFor='contact'>contact</label>
            <input type="number" id='contact' {...register("contact")}>enter contact</input>
            <label htmlFor='address'>Address</label>
            <input type="text" id='address' {...register("address")}></input>
            <label htmlFor='city'>City</label>
            <input type="text" id='city'></input>
            <button type="submit">submit</button>
            <button type='reset'>reset</button>
        </form>
    </div>
    </>
  )
}

export default UpdateUser