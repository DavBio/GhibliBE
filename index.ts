import express, { Express } from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import { router } from './src/routes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

const mongoDB = new MongoClient(uri);

try {
  mongoDB.connect();
} catch (error) {
  console.log('mongoDB connecting error', error);
}

app.use(cors());
app.use(express.json());
router(app, mongoDB);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

export = app;