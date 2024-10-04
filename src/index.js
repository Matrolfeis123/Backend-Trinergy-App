const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');



// Middleware
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/requests', requestRoutes);

// Puerto
const PORT = 3000;
app.listen(
    PORT,
    () => console.log(`Server is running on port ${PORT}`)
)

