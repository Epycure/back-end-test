require('dotenv').config();

const { db } = require('./utils/services.js');

(async (args) => {
  try {
    // get job name from command line arguments
    const [jobName] = args;
    if (!jobName) {
      throw Error('Job name not specified.');
    }

    // get job last run date
    const jobRes = await db.query(`
      SELECT *
      FROM job_logs
      WHERE job_name=$[jobName]
      ORDER BY ran_at DESC
      LIMIT 1
    `, {
      jobName,
    });

    // run job
    const job = require(`./jobs/${jobName}.js`);
    const lastRun = jobRes.length ? jobRes[0].ran_at : "1992-01-01";
    await job(lastRun);

    // save job last run
    await db.query(`
      INSERT INTO job_logs (job_name, ran_at)
      VALUES ($[jobName], NOW())
    `, {
      jobName,
    });
  } catch (error) {
    console.log('Could not run job:', error.message);
  }
})(process.argv.slice(2))