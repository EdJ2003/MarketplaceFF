import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function Products() {
    const tenerClick = (e) => {

    };
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetch("https://localhost:8081/products",{
            method:"GET",
            headers:{
            },
        }).then(response => response.json())
            .then(data => {
                const processedData = data.map(item => ({
                    ...item,
                    name: item.name || 'No disponible', // Use a default value if nombreBeneficio is null
                }));
                setProductsData(processedData); // Update beneficios data with the response
            });
    }, []);

    const columns = [
        { field: 'id', headerName: 'Id del producto', width: 200 },
        { field: 'name', headerName: 'Nombre del Producto', width: 200 },
        { field: 'price', headerName: 'Precio del producto', width: 200 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={productsData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(row) => row.id}
            />
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={tenerClick}>Comprar</Button>
            </Stack>

        </div>
    );
}