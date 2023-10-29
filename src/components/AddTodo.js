import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice';
export default function AddTodo() {
    const dispatch = useDispatch();
    const [todoInput, setTodoInput] = useState("");

    function addTodoHandler(e) {
        e.preventDefault();
        dispatch(addTodo(todoInput));
        setTodoInput("");

    }
    return (
        <form className='text-center' onSubmit={addTodoHandler}>
        <p className='text-white text-3xl'>AddTodo</p>

            <input className='p-2 rounded-md mt-5' type='text' placeholder='Enter todo' value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <button type='submit' className='bg-white ml-4 p-2 px-4 rounded-md' >Add</button>
        </form>
    )
}
