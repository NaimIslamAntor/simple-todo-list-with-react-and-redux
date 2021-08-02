import { useState } from 'react'
import './css/Input.css'

import { useDispatch } from 'react-redux'

import { saveTodo } from '../features/todoSlice'

const Input = () => {

    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            id: Date.now(),
            done: false,
            item: todo
        }))

        setTodo('')
    }

    return (
        <div className="Input">
            <input type="text" className="writeTodo" value={todo} onChange={e => setTodo(e.target.value)} />
            <button className="addTodoBtn" onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
