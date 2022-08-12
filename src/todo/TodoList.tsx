import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    const list = useSelector( (state) => state.todo.value);
    return(
        <div>
            { list.map((a:String, index:number) =>
                <div>
                    <p></p>
                </div>
            )}
        </div>
    )
}

export default TodoList;