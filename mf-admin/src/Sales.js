// Sales.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sales = ({ sales }) => (
    <List>
        <h2>Sales</h2>
        {sales.map((sale, index) => (
            <ListItem key={index}>
                <ListItemText primary={sale} />
            </ListItem>
        ))}
    </List>
);

export default Sales;