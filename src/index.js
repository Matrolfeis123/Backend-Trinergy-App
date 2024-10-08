const express = require('express');


const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');
const terrenoRoutes = require('./routes/terrenoRoutes');

const app = express();


// Middleware
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/requests', requestRoutes);
app.use('/terrenos', terrenoRoutes);


// Puerto
const PORT = 3000;
app.listen(
    PORT,
    () => console.log(`Server is running on port ${PORT}`)
)


