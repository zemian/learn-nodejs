let mysql = require('mysql');
let express = require('express');
const { RSA_NO_PADDING } = require('constants');
let app = express();

app.use(express.static("public"));
app.use(express.json());

function useDB(callback) {
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

app.get("/employees/list", (req, res) => {
  useDB(conn => {
    let limit = Number(req.query.limit || '10');
    let offset = Number(req.query.offset || '0');
    let sql = 'SELECT * FROM employees ORDER BY hire_date DESC LIMIT ?, ?';
    console.log("Query " + sql);
    console.log("Parameters: ", [offset, limit]);
    conn.query(sql, [offset, limit], function (error, result) {
      if (error) throw error;
      res.json(result);
    });
  });
});

app.post("/employees/new", (req, res) => {
  let form = req.body;
  //console.log("Form submitted", form);
  useDB(conn => {
      let sql = `INSERT INTO employees(emp_no, first_name, last_name, gender, birth_date, hire_date) 
      VALUES(?, ?, ?, ?, ?, ?)`;
      let params = [Number(form.emp_no), form.first_name, form.last_name, form.gender, form.birth_date, form.hire_date];
      console.log("Query " + sql);
      console.log("Parameters: ", params);
      conn.query(sql, params, function (error, result) {
          if (error) {
            console.error("Error create new employee", error);
            res.json({"status": "error", "message": error});
          } else {
            res.json({"status": "successful"});
          }
      });
  });
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
