import { deprecated } from 'typesafe-actions';

// deprecated 안에 createStandardAction만 불러오면 됌
const { createStandardAction } = deprecated;

export const ADD_TODO = 'todo/ADD_TODO';
export const DELETE_TODO = 'todo/DELETE_TODO';

export const addTodo = createStandardAction(ADD_TODO)<{
    todo : Object;
}>();

export const deleteTodo = createStandardAction(DELETE_TODO)();
