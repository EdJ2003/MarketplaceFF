import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function UserProfile({ user }) {
    // Establece un objeto user predeterminado si user no está definido
    const safeUser = user ?? {
        id: 'No disponible',
        email: 'No disponible',
        password: 'No disponible',
        name: 'No disponible',
        address: 'No disponible',
        phone: 'No disponible',
    };

    return (
        <Card sx={{ maxWidth: 600, m: 'auto', mt: 5 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Perfil del Usuario
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            ID: {safeUser.id}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            Email: {safeUser.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            Contraseña: {safeUser.password}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            Nombre: {safeUser.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            Dirección: {safeUser.address}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="text.secondary">
                            Teléfono: {safeUser.phone}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default UserProfile;