const express = require('express');
const { body, validationResult } = require('express-validator');

const { trello } = require('../utils/services.js');

const router = express.Router({ mergeParams: true });

router.post('/', async (req, res) => {
  /* TODO:
    - add body params validation
    - push card to Trello using its SDK
    
    NOTES:
    - body params validation error should be a 422 returning:

      ```
      { 
        ok: false,
        message: 'Invalid body parameters',
        errors: [...],
      }
      ```

    - Trello API error should be a 424 returning:

      ```
      {
        ok: false,
        message: 'Error creating Trello card',
        error: ...,
      }
      ```
  */
    });

module.exports = router;