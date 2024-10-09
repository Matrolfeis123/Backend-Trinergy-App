module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base', // o la guía que hayas elegido
    'plugin:prettier/recommended', // Añade Prettier
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Muestra errores de Prettier como errores de ESLint
    // Puedes personalizar o desactivar reglas específicas aquí
    'no-console': 'off', // Ejemplo: permitir el uso de console.log
  },
};
