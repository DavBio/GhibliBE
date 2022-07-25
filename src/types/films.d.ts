import { ObjectId } from 'mongodb';

export interface Films {
    _id: ObjectId;
    title: string;
    original_title: string;
    movie_banner: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
}