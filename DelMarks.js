import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const DelMarks = () => {
  const navigate=useNavigate();
  const{_id}=useParams();
  const[user,setUser]=useState();
  useEffect(()=>{
    const fetchUser=async()=>{
        try{
            const res=await axios.delete(`http://localhost:5000/deletemarks/${_id}`);
            setUser(res.data);
            console.log(res.data);
            console.log("deleted successfully!!")
        }catch(error){
            
                console.log("not able to delete: ",error);
        }
    }
    fetchUser();
},[_id]);
function navigateDetailedView(){
    navigate(`/detailedview`)
}
return (
<div>
    <h2>Data deleted:</h2>
    <button type="button" onClick={navigateDetailedView}>Detailed View</button>
</div>
)
}



export default DelMarks