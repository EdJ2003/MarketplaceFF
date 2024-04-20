import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from "react-router-dom";

export const mainListItems = (
    <React.Fragment>
        {/* Utiliza el componente Link de react-router-dom */}
        <Link to="/productos" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Productos" />
            </ListItemButton>
        </Link>

        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItemButton>
        </Link>

        <Link to="/admin" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Admin" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);


