/*

## How to handle CRUD operations as REST API - Using a In-Memory storage

  GET - fetch message
  POST - create message
  PUT - update message
  DELETE - delete message

## How to test with curl (use `-v` to see headers for debugging):

  GET
  curl http://localhost:3000/messages

  POST
  curl -H "content-type: application/json" -d '{"name": "Tester1", "email": "tester1@zemian.com", "message": "Just a test #4."}' http://localhost:3000/messages

  PUT
  curl -X PUT -H "content-type: application/json" -d '{"id": 1, "name": "Tester1", "email": "tester1@zemian.com", "message": "Updating msg."}' http://localhost:3000/messages

  DELETE
  curl -X DELETE -H "content-type: application/json" -d '{"id": 1}' http://localhost:3000/messages

NOTE: By default the `curl -d` will send post as `content-type=application/x-www-form-urlencoded` (like an html form), so you need to set the `content-type` header explicitly to change the data type. This affect how the server will receive the data.

 */
const express = require('express');
const sqlite3 = require('sqlite3');

const router = express.Router();

class DataStore {
  db = new sqlite3.Database('db/my-api-server.sqlite');

  getAllMessages(callback) {
    this.db.all('SELECT * FROM messages', callback);
  }

  getMessage(id, callback) {
    this.db.get('SELECT * FROM messages WHERE id = ?', [id], callback);
  }

  createMessage(message, callback) {
    //NOTE: The callback must be a function in order to use "this.lastID" ! A fat arrow
    // function will not work!
    this.db.run('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
        [message.name, message.email, message.message],
        function (err) {
          //console.log("INSERT", this, this.lastID, err);
          message.id = this.lastID;
          callback(err, message);
        });
  }

  deleteMessage(id, callback) {
    this.db.get('SELECT * FROM messages WHERE id = ?', [id], (err, row) => {
      this.db.run('DELETE FROM messages WHERE id = ?',
          [id],
          function (err) {
            if (this.changes)
              callback(err, row);
          });
    });
  }

  updateMessage(message, callback) {
    this.db.run('UPDATE messages set name = ?, email = ?, message = ? WHERE id = ?',
        [message.name, message.email, message.message, message.id],
        function (err) {
          if (this.changes)
            callback(err, message);
        });
  }

  close() {
    this.db.close();
  }
}
DataStore.withDataStore = function (callback) {
  let dataStore = new DataStore();
  callback(dataStore);
  dataStore.close();
}

// ## Handle post body parsing (using `req.body`)
// Case 1: Handle "Content-Type: application/json"
router.use(express.json());
// Case 2: Handle "Content-Type: application/x-www-form-urlencoded"
// NOTE: You would need to parse the req.body as string
router.use(express.urlencoded({ extended: true })); // true = use qs library to parse

router.get('/', (req, res) => {
  console.log("Handling GET request - get all");
  //console.log("headers", req.headers);

  DataStore.withDataStore(dataStore => {
    dataStore.getAllMessages((err, rows) => res.json({items: rows, count: rows.length, isMore: false}));
  });
});

router.get('/:id', (req, res) => {
  console.log("Handling GET request - get by id", req.params.id);
  //console.log("headers", req.headers);
  const id = Number(req.params.id);

  DataStore.withDataStore(dataStore => {
    dataStore.getMessage(id, (err, row) => {
      res.json(row);
    });
  });
});

router.post('/', (req, res) => {
  console.log("Handling POST request");
  //console.log("headers", req.headers);
  // console.log("body", req.body);
  const msg = req.body;

  DataStore.withDataStore(dataStore => {
    dataStore.createMessage(msg, (err, row) => {
      res.json(row);
    });
  });
});

router.put('/', (req, res) => {
  console.log("Handling PUT request");
  //console.log("headers", req.headers);
  // console.log("body", req.body);
  const msg = req.body;
  DataStore.withDataStore(dataStore => {
    dataStore.updateMessage(msg, (err, row) => {
      res.json(row);
    });
  });
});

router.delete('/', (req, res) => {
  console.log("Handling DELETE request");
  //console.log("headers", req.headers);
  // console.log("body", req.body);
  const msg = req.body;
  DataStore.withDataStore(dataStore => {
    dataStore.deleteMessage(msg.id, (err, row) => {
      res.json(row);
    });
  });
});

module.exports = router;
