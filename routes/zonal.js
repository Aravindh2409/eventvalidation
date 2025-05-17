// routes/zonal.js
const express = require('express');
const router = express.Router();

// POST route for handling fund request
router.post('/request', (req, res) => {
  const { eventName, amount, deadline } = req.body;

  console.log('Fund Request Received:', { eventName, amount, deadline });

  // TODO: Save to DB or trigger smart contract logic here

  res.send('Fund request submitted successfully.');
});

module.exports = router;
