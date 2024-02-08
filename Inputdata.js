import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const InputData = () => {
// const[fname,setFname]=useState('');
const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    dialCode:"",
    phoneNumber:""
})
const handleSubmit=(e)=>{
    e.preventDefault();
    const userData={
      fname:data.fname,
      lname:data.lname,
      email:data.email,
      password:data.password,
      dialCode:data.dialCode,
      phoneNumber:data.phoneNumber
    };
    axios
    .post("http://localhost:3000/api/create",userData)
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log("error");
    })
  }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>FirstName
                <input type='text' id="fname"  onChange={setData=>(value)=>{setData({...data, fname:value})}} />
            </label>
            <label>LastName
                <input type='text' id="lname"  onChange={setData=>(value)=>{setData({...data, lname:value})}}/>
            </label>
            <label>email
            <input type='email' id="email" onChange={setData=>(value)=>{setData({...data, email:value})}}/>
            </label>

            <label> Password:
                <input type='password' id="password"  onChange={setData=>(value)=>{setData({...data, password:value})}}/>
            </label>

            <label> dialCode:
                <input type='text' id="dialCode"  onChange={setData=>(value)=>{setData({...data, dialCode:value})}}/>
            </label>

            <label>Phone Number:
            <input type='text' id="phoneNumber"  onChange={setData=>(value)=>{setData({...data, phoneNumber:value})}}/>
            </label>

           <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default InputData