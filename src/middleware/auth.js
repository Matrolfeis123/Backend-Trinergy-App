const jwt = require('jsonwebtoken');

// Middleware para autenticar usuarios
exports.authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: 'Acceso denegado. Debes iniciar sesión para acceder a este recurso',
        });
    }

    // El encabezado de autorización tiene la forma de 'Bearer <token>'
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Acceso denegado. token invalido',
        });
    }

    // Verificar token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Error al verificar el token:', err);
            return res.status(403).json({
                success: false,
                message: 'Acceso denegado. Token expirado o inválido',
            });
        }

        // Guardar el ID del usuario autenticado en el objeto req
        req.usuario = decoded;
        next();
    });
};