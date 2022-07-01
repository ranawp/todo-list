import React, { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import AllTodo from './AllTodo';
import './todo.css'

const Todo = () => {
    const [inputValue, setInputValue] = useState();
    // const [todos, setTodos]=useState([]); 
    const todo = useRef(null);
    const [allTodo, setAllTodo] = useState([])
    const { register, handleSubmit } = useForm();

    // const handleSubmit = (e) => {
    //     const todoInput = todo.current.value;
    //     setInputValue(todoInput);
    //     // setTodos(value:[...todos,{text:inputValue,done:flase}])
    // }

    const onSubmit = data => {
        const url = `http://localhost:5000/todo/`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };


    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => setAllTodo(data))
    })
    return (
        <div className='flex mt-3 mb-3 justify-center items-center'>
            <div>
                <h1 className=' mt-10 mb-5'>Make your day with todo</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Todo name' className='mb-2 border-blue-500' {...register("name", { required: true, maxLength: 20 })} />

                    <input className=' mx-auto ml-2' type="submit" value="Add" />
                </form>

                <div className='row'>
                    {
                        allTodo.map(alltodo => <AllTodo
                            key={alltodo._id}
                            alltodo={alltodo}

                        ></AllTodo>)
                    }

                </div>



            </div>
        </div>
    );
};

export default Todo;