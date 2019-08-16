const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    host: process.env.REDIS_CACHE_HOST,
    port: process.env.REDIS_CACHE_PORT,
    password: process.env.REDIS_CACHE_PW, 
  }
}