const { algolia, db } = require('../utils/services.js');

module.exports = async (lastRun) => {
  /* TODO:
    - fetch the cards from the database that has been updated since this job last run.
    - save updated cards to Algolia using its SDK
    - remove deleted cards from Algolia using its SDK

    NOTE:
    - `lastRun` argument is the date (ISO format) of the last time the job ran, this is all managed by ./src/job.js
  */
};