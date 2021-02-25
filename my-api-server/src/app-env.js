const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Retrieving env vars");
    res.json(process.env);
});

module.exports = router;
