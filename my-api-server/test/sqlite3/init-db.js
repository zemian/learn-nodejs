const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('my-api-server-test.sqlite');
db.serialize(function() {
    console.log("Creating table");
    db.run("CREATE TABLE IF NOT EXISTS app_options (id INTEGER PRIMARY KEY, name VARCHAR(1000), value TEXT)", function () {
        console.log("Creating sample data");
        let stmt = db.prepare("INSERT INTO app_options VALUES (?, ?, ?)");
        for (let i = 0; i < 10; i++) {
            stmt.run(null, "Test " + i, Math.random());
        }
        stmt.finalize();
    });
});
db.close();
