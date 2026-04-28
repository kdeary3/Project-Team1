import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {ReviewForm} from "~/components/ReviewForm";
import LeadersDropdown from "~/components/LeadersDropdown";
import {useEffect, useState} from "react";
import type {ReviewType} from "~/review/ReviewType";
import ReviewCard from "~/components/ReviewCard";
import {getAllReviews} from "~/review/ReviewService";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
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
            <div className={"container p-5"}>
                <h1 className={"text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight"}>Reviews</h1>
                <LeadersDropdown/>
                <h3 className={"text-2xl/7 font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight"}>Read Existing Reviews</h3>
                {reviews.map(review => (
                    <ReviewCard key={review.id} review={review}/>
                ))}
            </div>
        </>
    );
}
