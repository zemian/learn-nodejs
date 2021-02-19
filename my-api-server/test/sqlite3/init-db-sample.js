const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('my-api-server-test.sqlite');
db.serialize(function() {
    console.log("Creating sample data");
    let stmt = db.prepare("INSERT INTO app_options (name, value) VALUES (?, ?)");
    for (let i = 0; i < 10; i++) {
        console.log("Inserting row: " + i);
        stmt.run("Test " + i, '' + Math.random());
    }
    stmt.finalize();

    db.each("SELECT * FROM app_options", function(err, row) {
        console.log(row.id + ": " + row.name + " " + row.value);
    });
});
db.close();
