// Inventory.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Inventory = ({ products }) => (
    <List>
        <h2>Inventory</h2>
        {products.map(product => (
            <ListItem key={product.id}>
                <ListItemText primary={product.name} secondary={product.description} />
            </ListItem>
        ))}
    </List>
);

export default Inventory;