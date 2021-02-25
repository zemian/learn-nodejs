const sqlite3 = require('sqlite3');

//TODO: Can we improve this to use Promise instead of callback?
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
            // console.log("Got row", row);
            this.db.run('DELETE FROM messages WHERE id = ?', [id], function (err) {
                if (this.changes)
                    callback(err, row);
            });
        });
    }

    updateMessage(message, callback) {
        this.db.run('UPDATE messages set name = ?, email = ?, message = ? WHERE id = ?',
            [message.name, message.email, message.message, message.id], function (err) {
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

module.exports = DataStore;
