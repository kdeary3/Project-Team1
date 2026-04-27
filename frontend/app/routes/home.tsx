import type { Route } from "./+types/home";
import LeadersDropdown from "~/components/LeadersDropdown";
import {useEffect, useState} from "react";
import type {ReviewType} from "~/review/ReviewType";
import ReviewCard from "~/components/ReviewCard";
import {getAllReviews} from "~/review/ReviewService";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
    const [reviews, setReviews] = useState<ReviewType[]>([])
    const refreshData = async () => {
        try {
            const data = await getAllReviews();
            setReviews(data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);


    return (
      <>
        <h1>Reviews</h1>
          <LeadersDropdown/>
          {reviews.map(review => (
             <ReviewCard key={review.id} review={review} />
          ))}
      </>
  );
}
