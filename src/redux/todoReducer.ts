import { combineReducers } from "redux";
import todo from './reducer'
import { Todo } from './type'

export type todoState = {
    todo : Todo;
}

const todoReducer = combineReducers({
    todo,
})

export default todoReducer;