import './css/Todo.css'

import { useDispatch } from 'react-redux'
import {doneTodo, deleteTodo} from '../features/todoSlice'
const Todo = ({ id, done, item }) => {

    const dispatch = useDispatch()

    const dispatchToDelete = useDispatch()

    const DoneTodo = () => {
      dispatch(doneTodo(
          id
      ))
    }

    const reomveTodo = () => {
        dispatch(deleteTodo(id))
        //console.log("okay")
    }

    return (
        <div className="todo">
        <div className={`todoItem ${done ? 'doneWithThisTodo': ''}`}>{item}</div>

        <button className="btn btnDone" onClick={DoneTodo}>Done</button>

        <button className="btn btnDelete" onClick={reomveTodo}>Delete</button>
        </div>
    )
}

export default Todo
