import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function createTodoList(){
    const temp = useSelector((state) => state.todo.value);

    return(
        <div>

        </div>
    )
}

export default createTodoList;