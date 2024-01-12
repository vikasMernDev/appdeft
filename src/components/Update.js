import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import './main.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function Update() {
    const navigate = useNavigate()
    const [todoData, setTodoData] = useState({})
    const { register, handleSubmit, setValue } = useForm()
    const parms = useParams()

    // get todo by id
    const getTodoById = () => {
        fetch('http://localhost:3001/getTodo/' + parms.id)
            .then(res => res.json())
            .then(data => setTodoData(data))
    }

    useEffect(() => {
        getTodoById()
    }, [])
    
    useEffect(() => {
        setValue('title',todoData.title)
        setValue('description',todoData.description)
    }, [todoData])

    // update todo
    const onSubmit = async (data) => {
        const todo = await fetch('http://localhost:3001/updateTodo/' + parms.id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        })
        navigate('/')
    }
    return (
        <div className='form-wrapper'>
            <div>
                <h2>Update Todo</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Title</label>
                        <input {...register("title")} required />
                    </div>
                    <div>
                        <label>Description</label>
                        <input {...register("description")} required />
                    </div>
                    <div>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
