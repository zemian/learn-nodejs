let mysql = require('mysql');
let express = require('express');
let app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {
    res.redirect('/employees/list');
});

app.get('/employees/list', (req, res) => {
    useDB(conn => {
        let offset = Number(req.query.offset || '0');
        let limit = Number(req.query.limit || '10');
        offset = offset < 0 ? 0 : offset;
        limit = limit < 0 ? 1 : limit;
        let sql = 'SELECT * FROM employees ORDER BY hire_date desc LIMIT ?, ?';
        let params = [offset, limit];
        console.log("Query " + sql);
        console.log("Parameters: ", params);
        conn.query(sql, params, function (error, result) {
            if (error) throw error;
            let data = { employees: result, offset: offset, limit: limit }
            res.render('employees/list', data);
        });
    });
});

app.get('/employees/new', (req, res) => {
    res.render('employees/new');
});
app.post('/employees/new', (req, res) => {
    let form = req.body;
    //console.log("Form submitted", form);
    useDB(conn => {
        let sql = `INSERT INTO employees(emp_no, first_name, last_name, gender, birth_date, hire_date) 
        VALUES(?, ?, ?, ?, ?, ?)`;
        let params = [Number(form.emp_no), form.first_name, form.last_name, form.gender, form.birth_date, form.hire_date];
        console.log("Query " + sql);
        console.log("Parameters: ", params);
        conn.query(sql, params, function (error, result) {
            if (error) throw error;
            res.redirect('/list');
        });
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
