import React, { useState } from 'react';
import { addUser } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const users=useSelector((state)=>state.users)

    const dispatch=useDispatch();
    const navigate=useNavigate()

   const handleSubmit = (event) => {
  event.preventDefault();

  // Calculate the new user ID
  const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

  // Dispatch the addUser action
  dispatch(addUser({ id: newUserId, name, email }));

  // Navigate to the desired location
  navigate("/");
};


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>

        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Add a new user</h3>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'
                    onChange={e=>setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control'
                    onChange={e=>setEmail(e.target.value)}/>
                </div> <br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create