const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'USERS',
  password: '01813',
  port: 5432,
});

module.exports = Pool;