import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {ReviewForm} from "~/components/ReviewForm";
import LeadersDropdown from "~/components/LeadersDropdown";
import {useEffect, useState} from "react";
import type {ReviewType} from "~/review/ReviewType";
import ReviewCard from "~/components/ReviewCard";
import {axiosGetAllReviews, getAllReviews} from "~/review/ReviewService";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

const Home = () => {
    const [selectedLeaderId, setSelectedLeaderId] = useState("ALL")
    const [reviews, setReviews] = useState<ReviewType[]>([])
    const [visibleReviews, setVisibleReviews] = useState(selectedLeaderId === "ALL"
        ? reviews
        : reviews.filter(r => r.leader.id.toString() === selectedLeaderId))
    const refreshData = async () => {
        try {
            const data = await axiosGetAllReviews();
            setReviews(data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    useEffect(() => {
        axiosGetAllReviews().then(setReviews)
    }, [])



    return (
        <div className={"container p-5"} data-testid="card">
            <h1>Reviews</h1>
            <LeadersDropdown onLeaderSelect={setSelectedLeaderId}/>
            {reviews &&
            reviews.map(r => <ReviewCard key={r.id} review={r}/>)}
        </div>
    );
}

export default Home;