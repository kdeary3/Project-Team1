import type {ReviewType} from "~/review/ReviewType";

type ReviewCardProps = {
    review: ReviewType;
};
export default function ReviewCard({review}: ReviewCardProps    ) {
    return (
        <div className="review-card">
            <p>{review.leader.firstName}</p>
            <p>{review.leader.lastName}</p>
            <p>{review.rating}</p>
            <p>{review.description}</p>
        </div>
    )
}