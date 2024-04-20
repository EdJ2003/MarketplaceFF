import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Sales() {
    const [beneficiosData, setBeneficiosData] = useState([]);

    useEffect(() => {
        fetch("/beneficios",{
            method:"GET",
            headers:{
            },
        }).then(response => response.json())
            .then(data => {
                const processedData = data.map(item => ({
                    ...item,
                    nombreBeneficio: item.nombreBeneficio || 'No disponible', // Use a default value if nombreBeneficio is null
                }));
                setBeneficiosData(processedData); // Update beneficios data with the response
            });
    }, []);

    const columns = [
        { field: 'sale', headerName: 'Venta', width: 200 },
        { field: 'value', headerName: 'Valor total de la venta', width: 200 },
        { field: 'codigo', headerName: 'Código', width: 200 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={beneficiosData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(row) => row.codigo}
            />
        </div>
    );
}