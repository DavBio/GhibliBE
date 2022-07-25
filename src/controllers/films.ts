import { Db, MongoClient } from "mongodb";
import { Request } from 'express';

export const getFilms = (req: Request, GhibliDB: Db) => {
    return JSON.stringify(`test`);
}
export const getOneFilm = (req: Request, GhibliDB: Db) => {
    return JSON.stringify(`test`);
}
export const populateFilmsDB = (req: Request, GhibliDB: Db) => {
    return JSON.stringify(`test`);
}