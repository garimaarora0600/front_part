import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const UpdateStuDetails = () => {
    const {_id}=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState({
        fname:"",
        lname:"",
        // email:"",
        // password:"",
        dialCode:"",
        phone:""
    })
    const handleSubmit=(e)=>{
        // try{
            e.preventDefault();
        axios.put(`http://localhost:5000/update/${_id}`,{
            fname:data.fname,
          lname:data.lname,
          email:data.email,
        //   password:data.password,
          dialCode:data.dialCode,
          phone:data.phone
        })
        .then((res)=>{
            // let genId=res.data._id;
            console.log(res.data);
            window.alert("data updated successfully!!")
           
        })
        // navigate('/registereduser');
        // }
        .catch((error)=>{
          console.log(error);
        });
      }
    
      function handleChange(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    
    function navigatetoDetailedView(){
        navigate(`/detailedview`);
    }
    return (
        <div>
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
    
                {/* <label> Password:
                    <input type='password' id="password"   onChange={(e)=>handleChange(e)}/>
                </label> */}
    
                <label> dialCode:
                    <input type='text' id="dialCode"  onChange={(e)=>handleChange(e)}/>
                </label>
    
                <label>Phone Number:
                <input type='text' id="phone"  onChange={(e)=>handleChange(e)}/>
                </label>
    
               <button type='submit' >Update</button>
               <button type='button' onClick={navigatetoDetailedView}>Go back</button>
            </form>
        </div>
      )
}

export default UpdateStuDetails