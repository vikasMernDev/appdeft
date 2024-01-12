import React, { useEffect } from 'react'
import './main.css';
import { Link } from 'react-router-dom';

export default function List() {
    const [todos, setTodos] = React.useState([])

    // get all todos list
    const getTodos = () => {
        fetch('http://localhost:3001/list')
            .then(res => res.json())
            .then(data => setTodos(data))
    }

    // delete todo
    const deleteTodo = (id) => {
        try {
            fetch('http://localhost:3001/deleteTodo/' + id, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            alert('deleted successfully')
            getTodos()
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className='table-wrap'>
            <div className='list-header'>
                <div className='add-btn'>
                    <Link to={'/create-todo'}>
                        <button>
                            Add Todo
                        </button>
                    </Link >
                </div>
                <div>
                    <h2>Todo List</h2>
                </div>
            </div>
            <div className=''>
                <table>
                    <thead>
                        <tr>
                            <td>Titles</td>
                            <td>Description</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td><Link to={`/update-todo/${item._id}`}><button className='edit-btn'>Edit
                                        </button></Link>
                                            <button onClick={(e) => deleteTodo(item._id)} className='delete-btn'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
