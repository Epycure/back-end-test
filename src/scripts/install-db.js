require('dotenv').config();

const { db } = require('../utils/services.js');

(async () => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS cards(
      id VARCHAR(255) UNIQUE PRIMARY KEY,
      name VARCHAR(255) DEFAULT NULL,
      id_board VARCHAR(255) DEFAULT NULL,
      id_list VARCHAR(255) DEFAULT NULL,
      description TEXT DEFAULT NULL,
      due TIMESTAMP WITH TIME ZONE DEFAULT NULL,
      closed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
    );
  `);

  
  await db.query(`
    CREATE TABLE IF NOT EXISTS job_logs(
      id SERIAL,
      job_name VARCHAR(255) DEFAULT NULL,
      ran_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('DB installed sucessfully');
})();