import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      saveTodo: (state, action) => {
          state.todoList.push(action.payload)
      },

      doneTodo: (state, action) => {
        const doneArr = state.todoList.filter(todo => todo.id == action.payload)
        if (doneArr[0].done) {
            doneArr[0].done = false;
        }else{
            doneArr[0].done = true;
        }
        
    },

    deleteTodo: (state, action) => {
        state.todoList = state.todoList.filter(todo => todo.id != action.payload)
    }
    }
});

export const { saveTodo, doneTodo, deleteTodo } = todoSlice.actions

export const selectListOfTodos = state => state.todos.todoList;

export default todoSlice.reducer