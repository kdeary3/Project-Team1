import {Link} from "react-router";
import LeadersDropdown from "../components/LeadersDropdown";

export default function ReviewForm() {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log("submitted")

    }

    return (
        <>
            <h1>Create a review</h1>
            <LeadersDropdown/>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor=""> Enter a review.
                    <input type="text"/>
                </label> <br/>
                <label htmlFor=""> Enter a rating.
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label> <br/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    );
}
