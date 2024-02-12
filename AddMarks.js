import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AddMarks = () => {
    const navigate=useNavigate();
    const { _id } = useParams(); // Get the _id parameter from the URL
    const [data, setData] = useState({ subject: '', marks: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res=await axios.post(`http://localhost:5000/marks/${_id}`, {
                subject:data.subject,
                marks:data.marks
            }); // Send a POST request to your API endpoint
            // Optionally, you can handle success or show a success message to the user
            console.log(res.data);
            window.alert('Marks added successfully!');
            // navigate(`/viewmarks/${_id}`);
        } catch (error) {
            console.error('Error adding marks:', error);
            // Optionally, you can handle errors and show an error message to the user
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    function navigatetoViewMarks(){
        navigate(`/viewmarks/${_id}`)
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    Subjects:
                    <input type='text' id='subject'  onChange={handleChange} />
                </label>
                <label>
                    Marks:
                    <input type='text' id='marks'  onChange={handleChange} />
                </label>
                <button type='submit'>Add</button>
            </form>
          <button type='button' onClick={navigatetoViewMarks}>View Marks</button>  
        </div>
    );
};

export default AddMarks;
