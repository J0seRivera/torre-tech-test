const express = require('express');
require('dotenv').config();
const axios = require('axios');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 4000;; // El puerto en el que deseas que se ejecute el servidor
const apiUrl = process.env.TORRE_API_BASE_URL;

// Importar el enrutador
app.use(bodyParser.json({limit:"30mb", extend: true}));
app.use(cors());

app.get('/server', (req, res) => {
  res.json({ mensaje: '¡Hola desde el servidor!' });
});

app.get('/search', async (req, res) => {
  const username = req.query.username;

  try {
    const response = await axios.get(`${apiUrl}${username}`);
    const userData = response.data;
    console.log(response.data)
    res.json(userData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error});
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});

