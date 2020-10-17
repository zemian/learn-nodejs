let mysql = require('mysql');
let express = require('express');
let app = express();

app.use(express.static("public"));

function useDB(callback) {
  // To use MySQL8, we need to use insecureAuth=true
  let conn = mysql.createConnection({
    host: 'localhost',
    user: 'zemiannative',
    password: 'test123',
    database: 'employees'
  });
  conn.connect();
  callback(conn);
  conn.end();
}

app.get("/employees", (req, res) => {
  useDB(conn => {
    let limit = Number(req.query.limit || '10');
    let offset = Number(req.query.offset || '0');
    let sql = 'SELECT * FROM employees ORDER BY last_name LIMIT ?, ?';
    console.log("Query " + sql);
    console.log("Parameters: ", [offset, limit]);
    conn.query(sql, [offset, limit], function (error, result) {
      if (error) throw error;
      res.json(result);
    });
  });
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
