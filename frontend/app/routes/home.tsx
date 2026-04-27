import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {ReviewForm} from "~/components/ReviewForm";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return (
        <>
            <h1>Reviews</h1>
            <ReviewForm
                isOpen={true}
                onClose={() => {}}
                onSuccess={() => {}}
            />
        </>
    );
}
