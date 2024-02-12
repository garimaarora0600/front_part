import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
// import Details from '../../../backend/databases/details_Sch_Mod';
const DelStudent = () => {
    const navigate=useNavigate();
    const {_id}=useParams();
    const[user,setUser]=useState();

    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const res=await axios.delete(`http://localhost:5000/delete/${_id}`);
                setUser(res.data);
                // const userId=await Details.findOne(_id);
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
    <div>Deleted successfully!!
        <button type="button" onClick={navigateDetailedView}>Detailed View</button>
    </div>
  )
}

export default DelStudent

// validation need to cover- that if the student already get deleted!! it should give us pop up that student already deleted!!