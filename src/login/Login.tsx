import React, { useState } from "react";
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Container, LoginBox } from '../css/css'
import { SignIn } from '../auth/auth'

function Login() {
    const [inputData, setInputData] = useState({
        email : "",
        password : ""
    });
    const [isChecked, setChecked] = useState(false);

    const isCheckedHandle = ( (e :React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name] : value
        })
        
        const emailCheck = inputData.email.includes('@') && inputData.email.includes('.')
        const pwCheck = inputData.password.length >= 7;
        return emailCheck && pwCheck? setChecked(true) : setChecked(false);
    })

    const login = () => {
        let email = inputData.email;
        let password = inputData.password;
        SignIn( { email, password } )
    }
  
    return(
        <Container>
            <LoginBox>
                <FormControl component="fieldset" variant="standard">
                    <p>이메일</p>
                    <TextField
                        name="email"
                        required
                        label="E-Mail"
                        onChange={isCheckedHandle}
                    />
                    <p>비밀번호</p>
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={isCheckedHandle}
                    />
                    {isChecked? <Button variant="contained" onClick={login} className="btn">로그인</Button> : <Button variant="contained" className="btn" disabled>로그인</Button>}
                </FormControl>
            </LoginBox>
        </Container>
    )
}

export default Login;