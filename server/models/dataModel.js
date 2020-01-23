const { Pool , Client } = require('pg');
const connectionString = (process.env.NODE_ENV === 'test') ? 
'postgres://txjuqrlm:FyAI2iBB3chQRKyIu1CmuR0plBjRvBFO@rajje.db.elephantsql.com:5432/txjuqrlm' : 
'postgres://ghizlawh:9sejhfX5XfjqVnGp5DiB3dB-6x1oYZC-@rajje.db.elephantsql.com:5432/ghizlawh';

const pool = new Pool({
    connectionString,
});

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }



