import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import './main.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    const { register, handleSubmit,setValue } = useForm()
    const onSubmit = async(data) => {
        const todo = await fetch('http://localhost:3001/createTodo',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'content-type':'application/json'
            }
        })
        setValue('title','')
        setValue('description','')
        navigate('/')
    }
    return (
        <div className='form-wrapper'>
            <div>
                <h2>Add Todo</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Title</label>
                        <input {...register("title")} required/>
                    </div>
                    <div>
                        <label>Description</label>
                        <input {...register("description")} required/>
                    </div>
                    <div>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
