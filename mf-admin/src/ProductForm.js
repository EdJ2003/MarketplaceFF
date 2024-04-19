// ProductForm.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class ProductForm extends React.Component {
    state = {
        name: '',
        description: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state);
        this.setState({ name: '', description: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField name="name" value={this.state.name} onChange={this.handleChange} label="Product name" required />
                <TextField name="description" value={this.state.description} onChange={this.handleChange} label="Product description" required />
                <Button type="submit" variant="contained" color="primary">Add Product</Button>
            </form>
        );
    }
}

export default ProductForm;