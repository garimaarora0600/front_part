// import axios from 'axios';
// import './DetailedView.css';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// const DetailedView = () => {
    
//     const [view, setView] = useState([]);
//     const navigate=useNavigate();
//     useEffect (() => {
//         const fetch= async ()=>{
//         await axios.get('http://localhost:5000/list')
//             .then(res => {    
//                 setView(res.data)
//                 console.log(res.data)
//                 let userid=res.data._id;
//                 console.log(userid)
//              } ).catch((e) =>{
//                 console.log("eerr", e)
//              })
//             }
//             fetch();
//     },[])
    

//     return (
//         <div>
//             <table>
//                 <tr>
//                     <th>Sno.</th>
//                     {/* <th>Id:</th> */}
//                     <th>Firstname</th>
//                     <th>LastName</th>
//                     <th>email</th>
//                     <th>dialCode</th>
//                     <th>phone</th>
//                 </tr>
//                 <tbody>
//                     {
//                     view.map((view,index )=> {
//                     return <tr key={index}>
//                     <td>{index+1}</td>
//                     {/* <td>{view._id}</td> */}
//                     <td>{view.fname}</td>   
//                     <td>{view.lname}</td>
//                     <td>{view.email}</td>
//                     <td>{view.dialCode}</td>
//                     <td>{view.phone}</td>
//                     <td>
//                         <button type='button' onClick={()=>navigate(`/update/${view._id}`)}>Update</button>
//                         <button type='button' onClick={()=>navigate(`/delStudent/${view._id}`)}>Delete</button>
//                         <button type='button' onClick={()=>navigate(`/addmarks/${view._id}`)}>Add Marks</button>
//                         <button type='button' onClick={()=>navigate(`/deletemarks/${view._id}`)}>Del Marks</button>
//                         <button type='button' onClick={()=>navigate(`/viewmarks/${view._id}`)}>View Marks</button>
//                         <button type='button' onClick={()=>navigate(`/updatemarks/${view._id}`)}>Update Marks</button>
//                     </td>
//                     </tr>

//                     })
//                 }      
//                 </tbody>
//             </table>
                    
//         </div>
//     )
// }

// export default DetailedView


import axios from 'axios';
import './DetailedView.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const DetailedView = () => {
    const [view, setView] = useState([]);
    const [currentPage, setCurrentPage]=useState(1);
    // const[npages,setNPages]=useState(1);
    const [length,setLength]=useState(0);
    const recordsPerPage=5;
    const lastIndex= currentPage* recordsPerPage;
    // console.log("lastindex:",lastIndex)
    //firstIndex for second page=10-5=5
    const firstIndex=lastIndex-recordsPerPage;
    const navigate=useNavigate();
    useEffect (() => {
        const fetch= async ()=>{
            // const skip=(currentPage-1)*recordsPerPage
        await axios.get('http://localhost:5000/list?page='+currentPage+"&limit="+recordsPerPage)
            .then(res => {    
                setView(res.data.data);
                setLength(res.data.length)
                // res.setHeader('X-')
                // const totalRecords=res.headers['x-total-count'];
                // console.log(totalRecords)
                // const totalPages=Math.ceil(totalRecords/recordsPerPage)    
                // setNPages(totalPages);
                console.log("response",res.data)
                // let userid=res.data._id;
                // console.log(userid)
             } ).catch((e) =>{
                console.log("eerr", e)
             })
            }
            fetch();
    },[currentPage])
    // const [currentPage, setCurrentPage]=useState(1);
    // const recordsPerPage=5;
    // suppose at page1= 5records, page 2=10
    // const lastIndex= currentPage* recordsPerPage;
    // console.log("lastindex:",lastIndex)
    // //firstIndex for second page=10-5=5
    // const firstIndex=lastIndex-recordsPerPage;
    // console.log(firstIndex)
    //fetch records for every page
    console.log("view",view);
    console.log("firstIndex",firstIndex);
    console.log("lastIndex:",lastIndex);
    // const records=view.slice(firstIndex,lastIndex);
    // const records=view.slice(firstIndex,lastIndex);
    // console.log("records",records);
    // how many pages we have
    const npages=Math.ceil(length/recordsPerPage)
    // console.log("npages:",npages);
    // console.log(view.length) ;
    const numbers=[...Array(npages+1).keys()].slice(1)
    console.log("numbers:",numbers);
    function prePage(){
        if(currentPage!==firstIndex){
            setCurrentPage(currentPage-1)
        }
    }
    function changeCPage(id){
        setCurrentPage(id);
    }
    function nextPage(){
        if(currentPage!==lastIndex){
            setCurrentPage(currentPage+1);
            // console.log("currentPage:",currentPage)
        }
    }
    return (
        <div>
            <table>
                <tr>
                    <th>Sno.</th>
                    {/* <th>Id:</th> */}
                    <th>Firstname</th>
                    <th>LastName</th>
                    <th>email</th>
                    <th>dialCode</th>
                    <th>phone</th>
                    <th>buttons</th>
                </tr>
                <tbody>
                    {
                    // view.map((view,index )=> {
                    // return <tr key={index}>
                    // <td>{index+1}</td>
                    // {/* <td>{view._id}</td> */}
                    // <td>{view.fname}</td>   
                    // <td>{view.lname}</td>
                    // <td>{view.email}</td>
                    // <td>{view.dialCode}</td>
                    // <td>{view.phone}</td>
                    // <td>
                    //     <button type='button' onClick={()=>navigate(`/update/${view._id}`)}>Update</button>
                    //     <button type='button' onClick={()=>navigate(`/delStudent/${view._id}`)}>Delete</button>
                    //     <button type='button' onClick={()=>navigate(`/addmarks/${view._id}`)}>Add Marks</button>
                    //     <button type='button' onClick={()=>navigate(`/deletemarks/${view._id}`)}>Del Marks</button>
                    //     <button type='button' onClick={()=>navigate(`/viewmarks/${view._id}`)}>View Marks</button>
                    //     <button type='button' onClick={()=>navigate(`/updatemarks/${view._id}`)}>Update Marks</button>
                    // </td>
                    // </tr>

                    // })
                    view.map((record, index) => (
                        <tr key={index}>
                            <td>{firstIndex+index + 1}</td>
                            <td>{record.fname}</td>
                            <td>{record.lname}</td>
                            <td>{record.email}</td>
                            <td>{record.dialCode}</td>
                            <td>{record.phone}</td>
                            <td>
                                <button type='button' onClick={() => navigate(`/update/${record._id}`)}>Update</button>
                                <button type='button' onClick={() => navigate(`/delStudent/${record._id}`)}>Delete</button>
                                <button type='button' onClick={() => navigate(`/addmarks/${record._id}`)}>Add Marks</button>
                                <button type='button' onClick={() => navigate(`/deletemarks/${record._id}`)}>Del Marks</button>
                                <button type='button' onClick={() => navigate(`/viewmarks/${record._id}`)}>View Marks</button>
                                <button type='button' onClick={() => navigate(`/updatemarks/${record._id}`)}>Update Marks</button>
                            </td>
                        </tr>
                    ))
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
   
}

export default DetailedView





















