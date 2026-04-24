import axios, {type AxiosResponse} from 'axios';
import type {Review} from './ReviewType.ts';

type GetReviews = () => Promise<Review[]>;
type AxiosGetTasks = () => Promise<Review[]>;
type AxiosSaveTask = (review: Review) => Promise<Review>;
type AxiosDeleteTask = (id: number) => Promise<void>;

export const getAllTasks: GetReviews = async () => {
    return fetch('/api/v1/review', {method: 'GET'}).then((Response) => {
        return Response.json();
    });
};

export const axiosGetAllTasks: AxiosGetTasks = async () =>
    axios
        .get('/api/v1/review')
        .then((r: AxiosResponse<Review[]>) => r.data)
        .catch();

export const axiosSaveTask: AxiosSaveTask = (review: Review) => (axios
    .post('/api/v1/review', review)
    .then((r: AxiosResponse<Review>) => r.data)
    .catch());

export const axiosDeleteTask: AxiosDeleteTask = (id: number) => (axios
    .delete('/api/v1/review/' + id))
    .then((r: AxiosResponse<void>) => r.data)
    .catch();