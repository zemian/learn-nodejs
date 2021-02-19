/*

## How to handle CRUD operations as REST API - Using a In-Memory storage

  GET - fetch message
  POST - create message
  PUT - update message
  DELETE - delete message

## How to test with curl (use `-v` to see headers for debugging):

  GET
  curl http://localhost:3000

  POST
  curl -H "content-type: application/json" -d '{"name": "Tester1", "email": "tester1@zemian.com", "message": "Just a test #4."}' http://localhost:3000/message

  PUT
  curl -X PUT -H "content-type: application/json" -d '{"id": 1, "name": "Tester1", "email": "tester1@zemian.com", "message": "Updating msg."}' http://localhost:3000/message

  DELETE
  curl -X DELETE -H "content-type: application/json" -d '{"id": 1}' http://localhost:3000/message

NOTE: By default the `curl -d` will send post as `content-type=application/x-www-form-urlencoded` (like an html form), so you need to set the `content-type` header explicitly to change the data type. This affect how the server will receive the data.

 */
const express = require('express');
const router = express.Router();

const dataStore = {
  messages: [
    {id: 1, name: "Tester1", email: "tester1@zemian.com", message: "Just a test #1."},
    {id: 2, name: "Tester2", email: "tester2@zemian.com", message: "Just a test #2."},
    {id: 3, name: "Tester1", email: "tester1@zemian.com", message: "Just a test #3."}
  ]
};

// ## Handle post body parsing (using `req.body`)
// Case 1: Handle "Content-Type: application/json"
router.use(express.json());
// Case 2: Handle "Content-Type: application/x-www-form-urlencoded"
// NOTE: You would need to parse the req.body as string
router.use(express.urlencoded({ extended: true })); // true = use qs library to parse

router.get('/', (req, res) => {
  console.log("Handling GET request - get all");
  //console.log("headers", req.headers);
  res.json(dataStore.messages);
});

router.get('/:id', (req, res) => {
  console.log("Handling GET request - get by id", req.params.id);
  //console.log("headers", req.headers);
  const id = Number(req.params.id);
  const msg = dataStore.messages.find(e => e.id === id);
  // console.log("msg", msg);
  if (!msg) {
    res.json({error: "id " + id + " not found."});
  } else {
    res.json(msg);
  }
});

router.post('/', (req, res) => {
  console.log("Handling POST request");
  //console.log("headers", req.headers);
  // console.log("body", req.body);
  const msg = req.body;
  msg.id = dataStore.messages.length + 1; // Poorman id generator
  dataStore.messages.push(msg);
  res.json(msg);
});

router.put('/', (req, res) => {
  console.log("Handling PUT request");
  //console.log("headers", req.headers);
  // console.log("body", req.body);
  const msg = req.body;
  const existingMsg = dataStore.messages.find(e => e.id === msg.id);
  if (!existingMsg) {
    res.json({error: "id " + msg.id + " not found."});
  } else {
    Object.assign(existingMsg, msg);
    res.json(msg);
  }
});

router.delete('/', (req, res) => {
  console.log("Handling DELETE request");
  //console.log("headers", req.headers);
  // console.log("body", req.body);
  const msg = req.body;
  const existingMsg = dataStore.messages.find(e => e.id === msg.id);
  if (!existingMsg) {
    res.json({error: "id " + msg.id + " not found."});
  } else {
    // Delete by filter out element
    dataStore.messages = dataStore.messages.filter(e => e.id !== msg.id);
    res.json(existingMsg);
  }
});

module.exports = router;
