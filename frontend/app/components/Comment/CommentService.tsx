import axios, {type AxiosResponse} from 'axios';
import type {CommentResponse, CommentType} from './CommentType.ts';

type AxiosGetComments = (reviewId:number) => Promise<CommentResponse[]>;
type AxiosSaveComment = (comment: CommentType) => Promise<CommentType>;
type AxiosDeleteComment = (id: number) => Promise<void>;

export const axiosGetAllCommentsByReviewId: AxiosGetComments = async (reviewId:number) =>
    axios
        .get(`/api/v1/${reviewId}/comments`)
        .then((r: AxiosResponse<CommentResponse[]>) => r.data)
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
