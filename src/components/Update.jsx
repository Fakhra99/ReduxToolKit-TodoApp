import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTodo } from './todoReducer';

const Update = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const existingTodo = todos.find((todo) => todo.id === parseInt(id, 10));

  const { todo: existingTodoText } = existingTodo || {};

  const [updateTodoText, setTodoText] = useState(existingTodoText || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateTodo({
      id: parseInt(id, 10),
      todo: updateTodoText,
    }));
    navigate("/");
  };

  useEffect(() => {
    setTodoText(existingTodoText || '');
  }, [existingTodo, existingTodoText]);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleUpdate}>
          <div>
            <h3>Edit todo</h3>
            <label htmlFor="todo">Todo:</label>
            <input
              type="text"
              name='todo'
              className='form-control'
              value={updateTodoText}
              onChange={(e) => setTodoText(e.target.value)}
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
