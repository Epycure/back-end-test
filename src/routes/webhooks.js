const express = require('express');

const { db, trello } = require('../utils/services.js');

const router = express.Router({ mergeParams: true });

router.get('/trello', async (req, res) => {
  return res.send({
    ok: true,
    data: null,
  });
});

router.post('/trello', async (req, res) => {
  /* TODO:
    - insert the card to database if the event type is "createCard"
    - update the card in database if the event type is "updateCard"
    - soft delete the card in database if the event type is "deleteCard"
  */
});

module.exports = router;