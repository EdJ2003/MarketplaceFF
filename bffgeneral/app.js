const fs = require('fs');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(express.json());

const axiosRetry = async (url, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await axios.get(url);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/products', async (req, res) => {
  try {
    const species = await axiosRetry('http://localhost:8082/products');
    res.send(species.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

app.post('/product/add', async (req, res) => {
  try {
    const dataToSend = req.body;
    const response = await axios.post('http://localhost:8082/product/add', dataToSend);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while adding a product' });
  }
});

app.post('/user/add', async (req, res) => {
  try {
    const dataToSend = req.body;
    const response = await axios.post('http://localhost:8082/register', dataToSend);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while adding a produc' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const dataToSend = req.body;
    const response = await axios.post('http://localhost:8082/login', dataToSend);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while adding a product' });
  }
});

module.exports = app;
