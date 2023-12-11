import React, { useState } from 'react';
import { addTodo } from './todoReducer'; // Assuming you have a todoReducer
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Calculate the new todo ID
    const newTodoId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    // Dispatch the addTodo action
    dispatch(addTodo({ id: newTodoId, todo }));

    // Navigate to the desired location
    navigate('/');
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-light p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Add a new todo</h3>
            <label htmlFor='todo'>Todo:</label>
            <input
              type='text'
              name='todo'
              className='form-control'
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <br />
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
