import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const UpdateMarks = () => {
    const {_id}=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState({
        marks:"",
        subject:""
    });
    const handleSubmit=(e)=>{
        // try{
            e.preventDefault();
        axios.put(`http://localhost:5000/updatemarks/${_id}`,{
            subject:data.subject,
          marks:data.marks,
          
        })
        .then((res)=>{
            // let genId=res.data._id;
            console.log(res.data);
            window.alert("data updated successfully!!")
           
        })
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
    <div>UpdateMarks
         <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Subject:
                    <input type='text' id="subject"  onChange={(e)=>handleChange(e)}/>
                </label>
                <label>Marks:
                    <input type='text' id="marks"  onChange={(e)=>handleChange(e)}/>
                </label>
               <button type='submit' >Update</button>
               <button type='button' onClick={navigatetoDetailedView}>Go back</button>
            </form>
    </div>
  )
}

export default UpdateMarks