import React, { useState } from "react";
import { users } from '../types/users'
import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const TOKEN_TIME_OUT = 600 * 1000;

export function SignIn( { email, password }:users ) {

    if( email === undefined){
        return false
    }else{
        const headers = {
            Authorization : localStorage.getItem('access_token') || ''
        };
    }
}
