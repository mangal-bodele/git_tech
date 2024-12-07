import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [register,handleSubmit] = useForm();
    const naviGate = useNavigate()

    function saveData(data){
        axios.post('http://localhost:3000/users',data)
        .then(res=>console.log(res))
        alert("data added successfully")
        naviGate('/show')

    }

  return (
    <>
    <div>
        <h1>AddUser</h1>
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

export default AddUser