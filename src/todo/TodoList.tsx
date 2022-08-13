import * as React from 'react';
import { todoState } from '../redux/todoReducer'
import { useSelector, useDispatch } from 'react-redux';
import CreateTodoList from './CreateTodoList';
import { deleteTodo } from '../redux/action';
import styled from "styled-components";

function TodoList() {    
    const [post, setPost] = React.useState(false);
    const todoList = useSelector((state :todoState ) => state.todo.todo);
    const dispatch = useDispatch();
    const remove = React.useCallback(() => dispatch(deleteTodo()), [
        dispatch
    ]);

    let arr = []
    arr = Object.values(todoList)

    return(
        <Container>
            {
                arr.map((a, index) =>
                <>
                    <PostBox key={a}>
                        {a.title}
                    </PostBox>
                </>
            )}
            <CreateButton onClick={() => {
                setPost(true)
            }}>TodoList 등록하기</CreateButton>{
                post === true ? <CreateTodoList /> : null
            }
        </Container>
    )
}

export default TodoList;


export const Container = styled.div`
    margin: 0 auto;
    width : 50%;
`

export const CreateButton = styled.button`
    background-color : skyblue;
    color : white;
    width : 150px;
    height : 10px;
    border: 0;
    cursor : pointer;
`;

export const PostBox = styled.p`
    width : 100%;
    height : 100%;
    border : 1px solid lightgray;

` 