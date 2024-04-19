// ShoppingCart.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ShoppingCart = ({ cart }) => (
    <List>
        <h2>Shopping Cart</h2>
        {cart.map((product, index) => (
            <ListItem key={index}>
                <ListItemText primary={product.name} secondary={product.description} />
            </ListItem>
        ))}
    </List>
);

export default ShoppingCart;