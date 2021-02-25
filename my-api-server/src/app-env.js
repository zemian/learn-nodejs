require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Retrieving APP env vars");
    let env = {};
    for (let key in process.env) {
        if (key.startsWith("APP_")) {
            env[key] = process.env[key];
        }
    }
    res.json(env);
});

module.exports = router;
