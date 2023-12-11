import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo } from './todoReducer';

const Home = () => {
    const todos = useSelector((state) => state.todos); 
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTodo({ id: id }));
    };

    return (
        <div className='container'>
            <h2>CRUD Todo App</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                            <td>
                                <Link to={`/edit/${todo.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(todo.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
