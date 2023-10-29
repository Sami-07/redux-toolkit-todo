import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todos() {
    const allTodos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();
    function removeTodoHandler(todoId) {
        dispatch(removeTodo(todoId));
    }
    return (
        <div>
            <h1 className='text-white text-center text-5xl my-10'> All Todos</h1>
            {allTodos && allTodos.map(eachTodo => {
                return (
                    <div className='flex justify-center items-center mb-5 gap-4 ' key={eachTodo.id}>
                        <p className='text-2xl text-white' >{eachTodo.text}</p>
                        <button className='bg-white p-2' onClick={() => removeTodoHandler(eachTodo.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
