import axios, {type AxiosResponse} from 'axios';
import type {Review} from './ReviewType.ts';

type GetReviews = () => Promise<Review[]>;
type AxiosGetReview = () => Promise<Review[]>;
type AxiosSaveReview = (review: Review) => Promise<Review>;
type AxiosDeleteReview = (id: number) => Promise<void>;

export const getAllTasks: GetReviews = async () => {
    return fetch('/api/v1/review', {method: 'GET'}).then((Response) => {
        return Response.json();
    });
};

export const axiosGetAllReview: AxiosGetReview = async () =>
    axios
        .get('/api/v1/review')
        .then((r: AxiosResponse<Review[]>) => r.data)
        .catch();

export const axiosSaveReview: AxiosSaveReview = (review: Review) => (axios
    .post('/api/v1/review', review)
    .then((r: AxiosResponse<Review>) => r.data)
    .catch());

export const axiosDeleteReview: AxiosDeleteReview = (id: number) => (axios
    .delete('/api/v1/review/' + id))
    .then((r: AxiosResponse<void>) => r.data)
    .catch();