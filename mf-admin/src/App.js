// AdminApp.js
import React from 'react';
import ProductForm from './ProductForm';
import Inventory from './Inventory';
import Sales from './Sales';
import Container from '@mui/material/Container';

class App extends React.Component {
  state = {
    products: [],
    sales: []
  };

  componentDidMount() {
    // Aquí debes hacer una solicitud a tu API para obtener los productos y las ventas
    // y luego establecer el estado con los datos obtenidos.
  }

  addProduct = (product) => {
    this.setState(prevState => ({
      products: [...prevState.products, product]
    }));
  }

  render() {
    return (
        <Container>
          <ProductForm addProduct={this.addProduct} />
          <Inventory products={this.state.products} />
          <Sales sales={this.state.sales} />
        </Container>
    );
  }
}

export default App;
