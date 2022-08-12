import React from "react";
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value : [
            {
                idx : 1,
                title : '기본 글 입니다.',
                content : '첫번째 글 입니다.'
            }
        ]
    },
    reducers:{
        todo : (state, action) => {
            state.value = action.payload
        },
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        updateTodo: (state, action) => {
            let copyList = {...state.value};
            
        }
    }
});

export const { todo, addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;