import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function AddProduct() {
    const [product, setProduct] = useState({ name: '', price: 0, quantity: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se enviaría el producto a una API o se almacenaría localmente
        console.log(product);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Agregar Producto
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nombre del Producto"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
                <TextField
                    fullWidth
                    label="Precio"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                />
                <TextField
                    fullWidth
                    label="Cantidad"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary">
                    Agregar Producto
                </Button>
            </form>
        </Container>
    );
}

export default AddProduct;