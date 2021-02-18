const assert = require('assert');
const sqlite3 = require('sqlite3').verbose();
// https://github.com/mapbox/node-sqlite3/wiki/API

// Why use db.serialize()? https://github.com/mapbox/node-sqlite3/wiki/Control-Flow

describe("sqlite3", function () {
    it("hello sql", function (done) {
        // console.log("Creating in memory DB");
        let db = new sqlite3.Database(':memory:');
        assert(db);
        db.serialize(function() {
            // console.log("Creating table");
            db.run("CREATE TABLE lorem (info TEXT)");

            let stmt = db.prepare("INSERT INTO lorem VALUES (?)");
            for (let i = 0; i < 10; i++) {
                stmt.run("Ipsum " + i);
            }
            stmt.finalize();

            // console.log("Select table");
            let count = 0;
            db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
                count++;
                console.log(row.id + ": " + row.info);
                if (count === 10) {
                    // Do not end test until we print out data from DB
                    // Else test will end without any output
                    done();
                }
            });
        });
        db.close();
    })
})
