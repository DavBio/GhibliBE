import { filmRoutes } from './films';
import { Express } from 'express';
import { MongoClient } from 'mongodb';

export const router = (app: Express, mongoDB: MongoClient ) => {
    console.log('a a')
    filmRoutes(app, mongoDB);
}