import express from 'express';
import body from 'body-parser';
import { exists } from 'fs';
import mysql from 'mysql';
import Page from '../model/page';


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
});

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

const routes = express.Router();


let page = new Page('/test/url/page', new Array());

routes.use(body.json());

routes.use((req, res, next) => {
  req.connection = connection;
  next();
});

routes.use('/series/', (req, res, next) => {
  res.json(page);
});

routes.use('/series/:comic/', (req, res, next) => {
  let code = req.params.code;
  res.status(code).json({code: code});
});
routes.use('/series/:comic/?page', (req, res, next) => {
  let code = req.params.code;
  res.status(code).json({code: code});
});

routes.use('/throw', (req, res, next) => {
  throw new Error('forced thrown error.');
});

routes.use('*', (req, res, next) => {
  res.status(200).json({
    data: 'OK'
  });
});

process.on('exit', () => {
  connection.end()
});

export default routes;
