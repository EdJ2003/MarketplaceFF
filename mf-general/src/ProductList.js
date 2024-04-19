// ProductList.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const ProductList = ({ products, addToCart }) => (
    <List>
        {products.map(product => (
            <ListItem key={product.id}>
                <ListItemText primary={product.name} secondary={product.description} />
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                    Add to cart
                </Button>
            </ListItem>
        ))}
    </List>
);

export default ProductList;
