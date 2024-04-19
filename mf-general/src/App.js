// App.js
import React from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Container from '@mui/material/Container';

class App extends React.Component {
  state = {
    products: [],
    cart: []
  };

  componentDidMount() {
    // Aquí debes hacer una solicitud a tu API para obtener los productos
    // y luego establecer el estado con los productos obtenidos.
  }

  addToCart = (product) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }));
  }

  render() {
    return (
        <Container>
          <ProductList products={this.state.products} addToCart={this.addToCart} />
          <ShoppingCart cart={this.state.cart} />
        </Container>
    );
  }
}

export default App;
