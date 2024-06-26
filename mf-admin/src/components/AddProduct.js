import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Alert} from "@mui/material";

export default function AddProduct() {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [stock,setStock]=useState('')
    const [alertaMensaje, setAlertaMensaje] = useState(null);
    const [error, setError] = useState(false);
    const [alertaRespuesta, setAlertaRespuesta]=useState('');

    const handleNombreChange = (event) => {
        const value = event.target.value;
        setError(false);
        setName(value);

    };
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setError(false);
        if (value >= 0) {
            setPrice(value)
        }

    };
    const handleStockChange = (event) => {
        const value = event.target.value;
        setError(false);
        if (value >= 0) {
            setStock(value)
        }

    };
    const tenerClick = (e) => {
        e.preventDefault();
        if (!name || !price || !stock) {
            setAlertaMensaje('Debes llenar todos los campos requeridos');
            setAlertaRespuesta('error');
            setError(true);
            return;
        }

        const product = { name, price: parseFloat(price), stock: parseInt(stock, 10) };

        fetch("https://localhost:8081/product/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
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
            <TextField id="nombre" label="Nombre del Producto" variant="outlined"
                       value={name}
                       error={error}
                       onChange={handleNombreChange}/>
            <TextField id="price" label="Precio" variant="outlined"
                       value={price}
                       error={error}
                       type="number"
                       InputProps={{
                           inputProps: {
                               min: 0
                           }
                       }}
                       onChange={handlePriceChange}/>
            <TextField id="stock" label="Cantidad" variant="outlined"
                       value={stock}
                       error={error}
                       type="number"
                       InputProps={{
                           inputProps: {
                               min: 0
                           }
                       }}
                       onChange={handleStockChange}/>

            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={tenerClick}>Agregar</Button>
            </Stack>
            {alertaMensaje && (
                <Alert severity={alertaRespuesta}>{alertaMensaje}</Alert>
            )}
        </Box>
    );
}