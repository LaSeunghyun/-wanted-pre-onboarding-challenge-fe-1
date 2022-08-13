import React, { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

function CreateTodoList(){
    const [postData, setPostData] = useState({
        idx : Math.floor(Math.random() * 100),
        title : '',
        content : ''
    });
    const dispatch = useDispatch();
    const update = useCallback(
        (todo:Object) => dispatch(addTodo({todo: todo})),
        [dispatch]
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name] : value
        })
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        update(postData);
    }
    return(
        <div>
            <input type='text' name='title' onChange={onChange} />
            <input type='text' name='content' onChange={onChange} />
            <button onClick={onSubmit}>버튼</button>
        </div>
    )
}

export default CreateTodoList;