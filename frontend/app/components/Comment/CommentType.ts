import type {ReviewType} from "~/review/ReviewType";

export type CommentType ={
    id: number;
    review: ReviewType;
    comment:string;
    createdAt?: null;
    happyEmoji: number;
    sadEmoji: number;
    angryEmoji: number;
    poopEmoji: number;
}

export type CommentRequest = {
    reviewId: number;
    comment: string;
    happy_count: number;
    sad_count: number;
    angry_count: number;
    poop_count: number;
}

export type CommentResponse = {
    id: number;
    reviewId: number;
    comment:string;
    created_at:string;
    happyEmoji: number;
    sadEmoji: number;
    angryEmoji: number;
    poopEmoji: number;
}
export type CommentPatch = {
    id: number;
    reviewId: number;
    comment:string;
    created_at:string;
    happyEmoji: number;
    sadEmoji: number;
    angryEmoji: number;
    poopEmoji: number;
}