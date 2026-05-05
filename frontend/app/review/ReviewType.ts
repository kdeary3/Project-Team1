import type {LeaderType} from "~/leader/LeaderType";

export type ReviewType = {
    description: string;
    createdAt: string;
    id: number;
    leader: LeaderType;
    rating: number;
}