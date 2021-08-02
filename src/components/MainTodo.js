

import Input from './Input'

import Todo from './Todo'

import './css/MainTodo.css'

import {useSelector} from 'react-redux';
import { selectListOfTodos } from '../features/todoSlice'; 

const MainTodo = () => {

    const list = useSelector(selectListOfTodos);

    //console.log(list);

    return (
        <div className="todoMain">
         <div className="todoSub">
         <h2 className="todoHeading">Naim's Todo List</h2>
            <div className="inputContainer">
            <Input/>
            </div>

            <div className="todoContainer">

{
    list.map(todo =>  <Todo

        key={todo.id}
        id={todo.id}
        done={todo.done}
        item={todo.item}
    />)
}
           

            </div>
         </div>
        </div>
    )
}

export default MainTodo
