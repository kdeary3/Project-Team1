import type {Leader} from "~/leader/LeaderType";

export type ReviewType = {
    id: number;
    rating: number;
    description: string;
    createdAt: Date;
    leader: Leader;
}