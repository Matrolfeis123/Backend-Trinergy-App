require('dotenv').config();
const express = require('express');
const app = express();

// Importar rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const requestRoutes = require('./routes/requestRoutes');
const terrenoRoutes = require('./routes/terrenoRoutes');



// Middleware
// const errorHandler = require('./middlewares/errorHandler');
// app.use(errorHandler);


// Rutas
app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/requests', requestRoutes);
app.use('/terrenos', terrenoRoutes);


// Puerto
const PORT = 3000;
app.listen(
    PORT,
    () => console.log(`Server is running on port ${PORT}`)
)


