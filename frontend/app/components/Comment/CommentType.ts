import type {ReviewType} from "~/review/ReviewType";

export type CommentType ={
    id: number
    review: ReviewType
    comment:string
    createdAt?: null
}