// server/config.js
module.exports = {
    AUTH0_DOMAIN: 'seabar.auth0.com',
    AUTH0_API_AUDIENCE: 'http://localhost:8083/api/',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://seabar:password@localhost:27017/DR_DATA'
  };