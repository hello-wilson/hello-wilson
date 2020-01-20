const { Pool , Client } = require('pg');
const connectionString = 'postgres://ghizlawh:9sejhfX5XfjqVnGp5DiB3dB-6x1oYZC-@rajje.db.elephantsql.com:5432/ghizlawh';

const pool = new Pool({
    connectionString,
});

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }



