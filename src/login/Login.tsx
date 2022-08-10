import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Login() {
    const [isChecked, setIsChecked] = useState(false);

    const isCheckedHandle = ( (e :React.ChangeEvent<HTMLInputElement>) => {
        let checkValue = e.target.value;
        let emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return emailReg.test(checkValue)? setIsChecked(true) : setIsChecked(false);
    })

    return(
        <div className="container">
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <TextField
                    id="email"
                    required
                    label="E-Mail"
                    onChange={isCheckedHandle}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                {isChecked? <Button variant="contained" className="btn">로그인</Button> : <Button variant="contained" className="btn" disabled>로그인</Button>}
            </Box>
        </div>
    )
}

export default Login;