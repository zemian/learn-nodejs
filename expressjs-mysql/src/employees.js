let mysql = require('mysql');
let express = require('express');
let app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

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
    useDB(conn => {
        let limit = Number(req.query.limit || '10');
        let offset = Number(req.query.offset || '0');
        offset = offset < 1 ? 1 : offset;
        offset = offset < 0 ? 0 : offset;
        let sql = 'SELECT * FROM employees ORDER BY last_name LIMIT ?, ?';
        console.log("Query " + sql);
        console.log("Parameters: ", [offset, limit]);
        conn.query(sql, [offset, limit], function (error, result) {
            if (error) throw error;
            let data = { employees: result, offset: offset, limit: limit }
            res.render('employees/list', data);
        });
    });

});

const port = 3000;
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
