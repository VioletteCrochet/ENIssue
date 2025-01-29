require('dotenv').config(); // Charger le fichier .env

const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '127.0.0.1'
};

module.exports = config;
