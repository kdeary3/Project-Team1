import axios, {type AxiosResponse} from 'axios';
import type {ReviewType} from './ReviewType.ts';

type GetReviews = () => Promise<ReviewType[]>;
type AxiosGetReview = () => Promise<ReviewType[]>;
type AxiosSaveReview = (review: ReviewType) => Promise<ReviewType>;
type AxiosDeleteReview = (id: number) => Promise<void>;

export const getAllReviews: GetReviews = async () => {
    const result = await fetch('http://localhost:8080/api/v1/review', {method: 'GET'})
    console.log(result.json())
    return result.json();
};

export const axiosGetAllReviews: AxiosGetReview = async () =>
    axios
        .get('/api/v1/review')
        .then((r: AxiosResponse<ReviewType[]>) => r.data)
        .catch()

export const axiosSaveReview: AxiosSaveReview = (review: ReviewType) => (axios
    .post('/api/v1/review', review)
    .then((r: AxiosResponse<ReviewType>) => r.data)
    .catch());

export const axiosDeleteReview: AxiosDeleteReview = (id: number) => (axios
    .delete('/api/v1/review/' + id))
    .then((r: AxiosResponse<void>) => r.data)
    .catch();