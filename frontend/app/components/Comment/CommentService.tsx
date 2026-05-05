import axios, {type AxiosResponse} from 'axios';
import type {CommentType} from './CommentType.ts';

type AxiosGetComments = () => Promise<CommentType[]>;
type AxiosSaveComment = (comment: CommentType) => Promise<CommentType>;
type AxiosDeleteComment = (id: number) => Promise<void>;

export const axiosGetAllCommentsByReviewId: AxiosGetComments = async () =>
    axios
        .get("/api/v1/{reviewId}/comments")
        .then((r: AxiosResponse<CommentType[]>) => r.data)
        .catch();

export const axiosGetAllComments: AxiosGetComments = async () =>
    axios
        .get("/api/v1/comments")
        .then((r: AxiosResponse<CommentType[]>) => r.data)
        .catch();

export const axiosSaveComment: AxiosSaveComment = (comment: CommentType) => (
    axios
        .post('/api/v1/comment', comment)
        .then((r: AxiosResponse<CommentType>) => r.data)
        .catch());

export const axiosDeleteComment: AxiosDeleteComment = (id: number) => (
    axios
        .delete('/api/v1/comment/' + id)
        .then((r: AxiosResponse<void>) => r.data)
        .catch());
