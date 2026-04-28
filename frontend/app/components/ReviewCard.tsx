import type {ReviewType} from "~/review/ReviewType";
import {useEffect, useState} from "react";
import {getAllReviews} from "~/review/ReviewService";

type ReviewCardProps = {
    review: ReviewType;
};

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <ul className={"container p-5"}>
            <li><strong>First: </strong>{review.leader.firstName}</li>
            <li><strong>Last: </strong>{review.leader.lastName}</li>
            <li><strong>Rating: </strong>{review.rating}</li>
            <li><strong>Comments: </strong>{review.description}</li>
        </ul>
    )
}