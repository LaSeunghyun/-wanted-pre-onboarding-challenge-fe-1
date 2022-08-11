import React, { useState } from "react";
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Container, LoginBox, Naming } from '../css/css'

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
        return emailCheck && pwCheck? setChecked(true) : setChecked(false);
    })

    const submitHandle = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <Container>
            <LoginBox>
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
                    <Naming>이메일 : <TextField
                        name="email"
                        required
                        label="E-Mail"
                        onChange={isCheckedHandle}
                    /></Naming>
                    <Naming>비밀번호 : <TextField
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={isCheckedHandle}
                    /></Naming>
                    {isChecked? <Button variant="contained" type="submit">로그인</Button> : <Button variant="contained" className="btn" disabled>로그인</Button>}
                    </FormControl>
                </Box>
            </LoginBox>
        </Container>
    )
}

export default Login;