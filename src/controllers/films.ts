import { Db, ObjectId } from "mongodb";
import { Request } from 'express';
import axios from 'axios';
import { Film } from "../types/films";
import { generatePaginationValues } from "../utils/paginationUtils";

export const getFilms = async (req: Request, GhibliDB: Db) => {
    try {
        const {
            query: { page },
        } = req;

        const currentPage: number = (() => {
            if (!page || Number.isNaN(page)) {
                return 0
            }
            return Number(page);
        })();

        const FilmsCollection = GhibliDB.collection('films');
        const count = await FilmsCollection.countDocuments();
        const pagination = generatePaginationValues({ count, currentPage });
        const { pageSize, isValidPage, totalPages } = pagination;

        if (!isValidPage) {
            return JSON.stringify({ message: `Bad request: invalid page value. Total number of pages is ${totalPages}.`, status: 400 });
        }

        const skipValue = currentPage * pageSize;
        const films = await FilmsCollection.find().skip(skipValue).limit(pageSize).toArray();

        return JSON.stringify({ status: 200, data: { films, pagination } });
    } catch (error) {
        return JSON.stringify({ message: `error @controllers/films.ts getFilms ${error}`, status: 500 });
    }
}

export const getOneFilm = async (req: Request, GhibliDB: Db) => {
    try {
        const {
            params: { filmId },
        } = req;


        if (!filmId || typeof filmId !== 'string' || !ObjectId.isValid(filmId)) {
            return JSON.stringify({ message: `Bad request: invalid or missing film id.`, status: 400 });
        }

        const FilmsCollection = GhibliDB.collection('films');
        const film = await FilmsCollection.findOne({ _id: new ObjectId(filmId) });

        if (!film) {
            return JSON.stringify({ message: `Sorry, we couldn't find the requested film`, status: 404 });
        }

        return JSON.stringify({ data: { film }, status: 200 });
    } catch (error) {
        return JSON.stringify({ message: `error @controllers/films.ts getOneFilm ${error}`, status: 500 });
    }
}

export const populateFilmsDB = async (req: Request, GhibliDB: Db) => {
    try {
        const FilmsCollection = GhibliDB.collection('films')
        const externalFilms = await axios.get('https://ghibliapi.herokuapp.com/films').then(req => req.data);

        const filmsToWrite = externalFilms.map((f: Film) => {
            const { title, original_title, movie_banner, description, director, producer, release_date } = f;
            return {
                _id: new ObjectId(),
                title,
                original_title,
                movie_banner,
                description,
                director,
                producer,
                release_date,
            }
        });

        const deleteResponse = await FilmsCollection.deleteMany({});
        const insertResponse = await FilmsCollection.insertMany(filmsToWrite);

        return JSON.stringify({ message: 'Database updated', status: 200 });
    } catch (error) {
        return JSON.stringify({ message: `error @controllers/films.ts populateFilmsDb ${error}`, status: 500 });
    }

}