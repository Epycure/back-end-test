require('dotenv').config();

const { trello } = require('../utils/services.js');

(async (args) => {
  try {
    const [baseURL] = args;
    if (!baseURL) {
      throw Error('URL not specified.');
    }
    const res = await trello.webhook.create({
      callbackURL: `${baseURL.replace(/\/?$/, '')}/webhooks/trello`,
      idModel: process.env.TRELLO_BOARD_ID,
      active: false
    }).catch((error) => {
      throw Error(error);
    });
    console.log('Trello webhook registerd:', res);
  } catch (error) {
    console.log('Could not register Trello webhook:', error.message);
  }
})(process.argv.slice(2));