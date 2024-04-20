import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import {Avatar, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";

const defaultTheme = createTheme();

export default function Login() {
    const [username,setUsername] =useState('') ;
    const [password,setPassword] =useState ('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async () => {
        const response = await fetch('/transacciones', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': 'Basic ' + btoa(`${username}:${password}`),
            },
            credentials: 'include', // This will include the cookie in every future request
        });

        if (response.ok) {
            // If the login was successful, set isLoggedIn to true
            setIsLoggedIn(true);
        } else {
            // Handle login failure
            console.error('Login failed');
        }
    };

    if (isLoggedIn) {
    } else {
        return (
            <ThemeProvider theme={defaultTheme}>

                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{

                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                component="form"
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form"  noValidate sx={{ mt: 1 }}>
                <TextField id="outlined-basic" label="Username" variant="outlined"
                           margin="normal"
                           value={username}
                           fullWidth
                           onChange={(e)=>setUsername(e.target.value)}/>
                <TextField id="outlined-basic" label="Contraseña" variant="outlined"
                           margin="normal"
                           value={password}
                           type="password"
                           fullWidth
                           onChange={(e)=>setPassword(e.target.value)}/>
                    <Button variant="contained" onClick={handleLogin}  fullWidth
                            sx={{ mt: 3, mb: 2 }}>Login</Button>

                </Box>
            </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        );
    }
}