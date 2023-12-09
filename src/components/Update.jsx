import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './userReducer';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === parseInt(id, 10));
  
  const { name: existingName, email: existingEmail } = existingUser || {};
  
  const [updatename, setName] = useState(existingName || '');
  const [updateemail, setEmail] = useState(existingEmail || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id: parseInt(id, 10),
      name: updatename,
      email: updateemail
    }));
    navigate("/");
  };

  
  useEffect(() => {
  setName(existingName || '');
  setEmail(existingEmail || '');
}, [existingUser, existingName, existingEmail]);


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleUpdate}>
          <div>
            <h3>Edit user</h3>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name='name'
              className='form-control'
              value={updatename}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='email'
              className='form-control'
              value={updateemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
