import {Link} from "react-router";
import LeadersDropdown from "~/components/LeadersDropdown";
import ReviewForm from "~/components/ReviewForm";

export default function createReview() {
    return (
        <div className={"container p-5"}>
            <ReviewForm/>
        </div>
    );
}
