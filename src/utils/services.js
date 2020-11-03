const algoliasearch = require('algoliasearch');
const pgPromise = require('pg-promise');
const TrelloNodeAPI = require('trello-node-api');

const pgp = pgPromise();
if (process.env.NODE_ENV === 'development') {
  pgp.pg.defaults.ssl = { rejectUnauthorized: false };
}
const db = pgp(process.env.DATABASE_URL);

const trello = TrelloNodeAPI(process.env.TRELLO_API_KEY, process.env.TRELLO_OAUTH_TOKEN);
const algolia = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);

module.exports = {
  db,
  trello,
  algolia,
};
