import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

const RegisteredView = () => {
  const {_id}=useParams();
  const [user,setUser]=useState([]);
 const navigate=useNavigate();
 useEffect(()=>{
  const fetchUser = async () => {
    try {
      // console.log('hi')
      // const response = await axios.get(`http://localhost:5000/${_id}`);
      const response = await axios.get(`http://localhost:5000/${_id}`);
      
      setUser(response.data); // Setting the user data in state
      console.log(response.data);
      // navigate('/detailedview');
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  fetchUser();
}, [_id]);
function navigateDetailedView(){
  navigate('/detailedview');
}

function navigateAddMarks(){
  navigate(`/addmarks/${_id}`)
}

function navigateDelStudent(){
  navigate(`/delStudent/${_id}`)
}
  // id=useParams();
  return (
    <div>
      <h2>User Details</h2>
      <p>User FirstName: {user.fname}</p>
      <p>User LastName: {user.lname}</p>
      <p>User email:{user.email}</p>
      <p>User phone:{user.dialCode}-{user.phone}</p>
      <button type='button' onClick={navigateDetailedView}>DetailedView</button>
      {/* <button type='button' onClick={navigateAddMarks}>Add Marks</button> */}
      {/* <button type='button' onClick={navigateDelStudent}>Delete Student</button> */}
    </div>
  )
}

export default RegisteredView