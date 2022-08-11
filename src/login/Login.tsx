import React, { useState } from "react";
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Login() {
    const [input, setInput] = useState({
        email : "",
        password : ""
    });
    const [isChecked, setChecked] = useState(false);

    const isCheckedHandle = ( (e :React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name] : value
        })
        
        const emailCheck = input.email.includes('@') && input.email.includes('.')
        const pwCheck = input.password.length >= 8;
        // let emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return emailCheck && pwCheck? setChecked(true) : setChecked(false);
    })

    const submitHandle = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <div className="container">
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={submitHandle}
            >
                <FormControl component="fieldset" variant="standard">
                <TextField
                    name="email"
                    required
                    label="E-Mail"
                    onChange={isCheckedHandle}
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={isCheckedHandle}
                />
                {isChecked? <Button variant="contained" type="submit">로그인</Button> : <Button variant="contained" className="btn" disabled>로그인</Button>}
                </FormControl>
            </Box>
        </div>
    )
}

export default Login;