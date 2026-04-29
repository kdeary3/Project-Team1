import type {LeaderType} from './LeaderType';
import axios, {Axios, type AxiosResponse} from "axios";

type GetLeaders = () => Promise<LeaderType[]>;

export const getAllLeaders: GetLeaders = async () => {
    const result = await fetch('api/leaders', {method: 'GET'})
    return result.json();
}

export const axiosGetAllLeaders: GetLeaders = async () => {
    axios
        .get('/api/leaders')
        .then((r: AxiosResponse<LeaderType[]>) => r.data)
        .catch();
}