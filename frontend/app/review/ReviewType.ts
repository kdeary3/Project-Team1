import type {Leader} from "~/leader/LeaderType";

export type ReviewType = {
    description: string;
    createdAt: string;
    id: number;
    leader: Leader;
    rating: number;
}