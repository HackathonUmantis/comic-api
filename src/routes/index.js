import express from 'express';
import body from 'body-parser';
import { exists } from 'fs';
import mysql from 'mysql';
import Serie from '../model/serie';


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




let series = new Array();
for (let index = 0, length = 5; index < length; index++) {
  series.push(new Serie(index + 1));
}

routes.use(body.json());

routes.use((req, res, next) => {
  req.connection = connection;
  next();
});

routes.use('/series/:serie/comics/:comic/pages/:page/tiles/:tile?/', (req, res, next) => {
  let filteredSeries = series.filter(serie => serie.uuid.toString() === req.params.serie)[0];
  if (filteredSeries) {
    let filteredComics = filteredSeries.comics.filter(comic => comic.uuid.toString() === req.params.comic)[0];
    if (filteredComics) {
      let filteredPages = filteredComics.pages.filter(page => page.uuid.toString() === req.params.page)[0];
      if (filteredPages) {
        let filteredTiles = req.params.tile ? filteredPages.tiles.filter(tile => tile.uuid.toString() === req.params.tile)[0] : filteredPages.tiles;
        res.status(filteredTiles ? 200 : 404).json(filteredTiles);
      } else {
        res.status(filteredPages ? 200 : 404).json(filteredPages);
      }
    } else {
      res.status(filteredComics ? 200 : 404).json(filteredComics);
    }
  } else {
    res.status(filteredSeries ? 200 : 404).json(filteredSeries);
  }
});

routes.use('/series/:serie/comics/:comic/pages/:page?/', (req, res, next) => {
  let filteredSeries = series.filter(serie => serie.uuid.toString() === req.params.serie)[0];
  if (filteredSeries) {
    let filteredComics = filteredSeries.comics.filter(comic => comic.uuid.toString() === req.params.comic)[0];
    if (filteredComics) {
      let filteredPages = req.params.page ? filteredComics.pages.filter(page => page.uuid.toString() === req.params.page)[0] : filteredComics.pages;
      res.status(filteredPages ? 200 : 404).json(filteredPages);
    } else {
      res.status(filteredComics ? 200 : 404).json(filteredComics);
    }
  } else {
    res.status(filteredSeries ? 200 : 404).json(filteredSeries);
  }

});

routes.use('/series/:serie/comics/:comic?/', (req, res, next) => {
  let filteredSeries = series.filter(serie => serie.uuid.toString() === req.params.serie)[0];
  if (filteredSeries) {
    let filteredComics = req.params.comic ? filteredSeries.comics.filter(comic => comic.uuid.toString() === req.params.comic)[0] : filteredSeries.comics;
    res.status(filteredComics ? 200 : 404).json(filteredComics);
  } else {
    res.status(filteredSeries ? 200 : 404).json(filteredSeries);
  }

});

routes.use('/series/:serie?/', (req, res, next) => {
  let filteredSeries = req.params.serie ? series.filter(serie => serie.uuid.toString() === req.params.serie)[0] : series;
  res.status(filteredSeries ? 200 : 404).json(filteredSeries);
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
