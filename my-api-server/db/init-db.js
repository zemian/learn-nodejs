const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('db/my-api-server.sqlite');
db.serialize(function() {
    console.log("Creating options table");
    db.run("CREATE TABLE IF NOT EXISTS options (" +
        "  id INTEGER PRIMARY KEY, " +
        "  name VARCHAR(1000), " +
        "  value TEXT," +
        "  create_ts DATETIME" +
        ")");

    console.log("Creating sample data");
    let stmt = db.prepare("INSERT INTO options VALUES (?, ?, ?, ?)");
    for (let i = 1; i <= 10; i++) {
        stmt.run(null, "Test " + i, Math.random(), new Date());
    }
    stmt.finalize();
    console.log("messages options is created.");

    console.log("Creating messages table");
    db.run("CREATE TABLE IF NOT EXISTS messages (" +
        "  id INTEGER PRIMARY KEY, " +
        "  name TEXT, " +
        "  email TEXT," +
        "  message TEXT," +
        "  create_ts DATETIME" +
        ")");

    console.log("Creating sample data");
    stmt = db.prepare("INSERT INTO messages VALUES (?, ?, ?, ?, ?)");
    for (let i = 1; i <= 100; i++) {
        stmt.run(null,
            "Tester" + i,
            "tester" + i + "@localhost.local",
            "Just a test #" + Math.random().toString(16),
            new Date()
        );
    }
    stmt.finalize();
    console.log("messages table is created.");
});
db.close();
