import { Express } from 'express';
import { MongoClient } from 'mongodb';
import { getOneFilm, getFilms, populateFilmsDB } from '../controllers/films';

export function filmRoutes(app: Express, mongoDB: MongoClient) {
    const GhibliDB = mongoDB.db('GhibliDB');
  
    app.get('/', async (req, res) => {
      const response = await getFilms(req, GhibliDB);
      res.send(response);
    });
  
    app.get('/:filmId', async (req, res) => {
      const response = await getOneFilm(req, GhibliDB);
      res.send(response);
    });
  
    app.post('/populate', async (req, res) => {
      const response = await populateFilmsDB (req, GhibliDB);
      res.send(response);
    });
};  