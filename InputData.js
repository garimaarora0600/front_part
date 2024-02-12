import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import './InputData.css'
const InputData = () => {
// const[fname,setFname]=useState('');
const navigate=useNavigate();
const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    dialCode:"",
    phone:""
})
const handleSubmit=(e)=>{
    // try{
        e.preventDefault();
    axios.post("http://localhost:5000/create",{
        fname:data.fname,
      lname:data.lname,
      email:data.email,
      password:data.password,
      dialCode:data.dialCode,
      phone:data.phone
    })
    .then((res)=>{
        let genId=res.data._id;
        navigate(`/registereduser/${genId}`)
        
    })
    // navigate('/registereduser');
    // }
    .catch=(error)=>{
      console.log(error);
    }
  }

  function handleChange(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
}


// const handleClick=()=>{
//     history.push('/registereduser')
// }
    return (
    <div>
        <h1 >Registration form</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>FirstName
                <input type='text' id="fname"  onChange={(e)=>handleChange(e)}/>
            </label>
            <label>LastName
                <input type='text' id="lname"  onChange={(e)=>handleChange(e)}/>
            </label>
            <label>email
            <input type='email' id="email"  onChange={(e)=>handleChange(e)}/>
            </label>

            <label> Password:
                <input type='password' id="password"   onChange={(e)=>handleChange(e)}/>
            </label>

            <label> dialCode:
                <input type='text' id="dialCode"  onChange={(e)=>handleChange(e)}/>
            </label>

            <label>Phone Number:
            <input type='text' id="phone"  onChange={(e)=>handleChange(e)}/>
            </label>

           <button type='submit' >Register</button>
        </form>
    </div>
  )
}

export default InputData