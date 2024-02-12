import React, { useState ,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './DetailedView.css'
const ViewMarks = () => {
    const {_id}=useParams();
    // console.log(_id);
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    useEffect(()=>{
        const fetchUser = async () => {
          try {
            // console.log('hi')
            // const response = await axios.get(`http://localhost:5000/${_id}`);
           const res=await  axios.get(`http://localhost:5000/viewmarks/${_id}`)
             console.log(res.data.data[0])
             setUser(res.data.data)
             console.log(user)
            
            // setUser(response.data.data); // Setting the user data in state
            // console.log(response.data);
            // navigate('/detailedview');
          } catch (error) {
            console.error("Error fetching user:", error);
          }
        };
        fetchUser();
      }, [_id]);
      const [currentPage, setCurrentPage]=useState(1);
    const recordsPerPage=5;
    const lastIndex= currentPage* recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const records=user.slice(firstIndex,lastIndex)
    const npages=Math.ceil(user.length/recordsPerPage)
    const numbers=[...Array(npages+1).keys()].slice(1)

  return (
    <div>
      <h2>Marks Details</h2>
      <table>
      <tr>
                <th>Sno.</th>
                <th>Subjects</th>
                <th>Marks</th>
      </tr>   
      
      <tbody> 
        {/* {user.map((user,index)=>{
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.subject}</td>
                    <td>{user.marks}</td>
                    <td><button type='button'>Update</button></td>
                </tr>
                
            })} */}
            {
              records.map((record,index)=>{
                return <tr key={index}>
                    <td>{firstIndex+index+1}</td>
                    <td>{record.subject}</td>
                    <td>{record.marks}</td>
                    <td><button type='button' onClick={()=>navigate(`/updatemarks/${record.userId}`)}>Update</button></td>
                  <td><button type='button' onClick={()=>navigate(`/deletemarks/${record.userId}`)}>Delete</button></td>
                </tr>
            }
            )
          }
      </tbody>
      </table>
      <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a href='#' className='page-link' onClick={prePage}>Prev</a>
                    </li>
                    {
                        numbers.map((n,i)=>{
                            return(
                            <li className={`page-item ${currentPage===n? 'active':''}`} key={i} >
                            <a href='#' className='page-link' 
                            onClick={()=>changeCPage(n)}>{n}</a>
                            </li>)
                        })
                    }
                     {/* {numbers.map((number, index) => (
                        <li className={`page-item ${number === currentPage ? 'active' : ''}`} key={index}>
                            <a href='#' className='page-link' onClick={() => changeCPage(number)}>{number}</a>
                        </li>
                    ))} */}
                    <li className='page-item'>
                        <a href='#' className='page-link' 
                        onClick={nextPage}>Next</a>
                    </li>
                </ul>
            </nav>     
        </div>
    )
    function prePage(){
        if(currentPage!==firstIndex){
            setCurrentPage(currentPage)
        }
    }
    function changeCPage(id){
        setCurrentPage(id);
    }
    function nextPage(){
        if(currentPage!==lastIndex){
            setCurrentPage(currentPage);
        }
    }
}


export default ViewMarks




// difficulties faced here
// 1.user.map is not defined, user.map is not function
// how did we solve it?
// initialize useState with( [] )this empty array
// console.log(res.data.data);
// setUser(res.data.data)