import { TodoAction, Todo } from './type'
import { createReducer } from 'typesafe-actions';
import { ADD_TODO, DELETE_TODO } from './action';
import produce from 'immer';

// typesafe-actions에서 createReducer는 기존 switch / case로 작성한 reducer를 object로 구현 할 수 있음

// produce는 기존 {...} 문법을 인자 2개로 설정할때 알아서 관리해줌
const intitailState : Todo = {
    todo : []
}

const todo = createReducer<Todo, TodoAction>(intitailState, {
    // [ADD_TODO] : (state, action) =>
    // produce(state, todoList => {
    //     todoList.todo.push(action.payload.todo)
    // }),
    [ADD_TODO] : (state, action) =>
    produce(state, todoList => {
        todoList.todo = action.payload
    }),
    [DELETE_TODO] : (state, action) =>
    produce(state, todoList => {
    })
})

export default todo;