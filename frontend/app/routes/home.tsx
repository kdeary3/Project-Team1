import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import LeadersDropdown from "~/components/LeadersDropdown";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <>
        <h1>Reviews</h1>
          <LeadersDropdown/>
      </>
  );
}
