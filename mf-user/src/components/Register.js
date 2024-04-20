import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Alert} from "@mui/material";

export default function Register() {
    const [email,setemail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [phone,setPhone]=useState('')
    const [alertaMensaje, setAlertaMensaje] = useState(null);
    const [error, setError] = useState(false);
    const [alertaRespuesta, setAlertaRespuesta]=useState('');


    const handleEmailChange = (event) => {
        const value = event.target.value;
        setError(false);
        setemail(value);

    };
    const handleNombreChange = (event) => {
        const value = event.target.value;
        setError(false);
        setName(value);

    };
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setError(false);
        if (value >= 0) {
            setPassword(value)
        }

    };
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setError(false);
        setAddress(value)
    }
        const handlePhoneChange = (event) => {
            const value = event.target.value;
            setError(false);
            setPhone(value)


    };
    const tenerClick = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            setAlertaMensaje('Debes llenar todos los campos requeridos');
            setAlertaRespuesta('error');
            setError(true);
            return;
        }

        const user = { email, name, password,address,phone: parseInt(phone, 10) };

        fetch("https://localhost:8081/user/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text(); // Obtenemos la respuesta como texto
        }).then(text => {
            if (text) { // Verificamos si la respuesta no está vacía
                const data = JSON.parse(text); // Analizamos el texto como JSON
                setAlertaMensaje(data.mensaje || 'Producto agregado con éxito');
                setAlertaRespuesta('success');
            } else {
                // Manejar correctamente cuando no hay contenido en la respuesta
                setAlertaMensaje('Producto agregado con éxito. No hay respuesta del servidor.');
                setAlertaRespuesta('success');
            }
        }).catch(error => {
            console.error("Error al realizar la solicitud:", error);
            setAlertaMensaje('Error al realizar la solicitud');
            setAlertaRespuesta('error');
        });
    };
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="email" label="Email" variant="outlined"
                       value={email}
                       error={error}
                       onChange={handleEmailChange}/>
            <TextField id="Password" label="Password" variant="outlined"
                       value={password}
                       error={error}
                       onChange={handlePasswordChange}/>

            <TextField id="name" label="name" variant="outlined"
                       value={name}
                       error={error}
                       onChange={handleNombreChange}/>

            <TextField id="address" label="Dirección" variant="outlined"
                       value={address}
                       error={error}
                       onChange={handleAddressChange}/>

            <TextField id="phone" label="Telefono" variant="outlined"
                       value={phone}
                       error={error}
                       onChange={handlePhoneChange}/>


            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={tenerClick}>Agregar</Button>
            </Stack>
            {alertaMensaje && (
                <Alert severity={alertaRespuesta}>{alertaMensaje}</Alert>
            )}
        </Box>
    );
}