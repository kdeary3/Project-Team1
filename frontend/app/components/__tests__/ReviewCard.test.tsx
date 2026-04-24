import {describe, it, expect, assert} from "vitest";
import { render, screen } from "@testing-library/react";
import ReviewCard from "~/components/ReviewCard";
import type {ReviewType} from "~/review/ReviewType";

describe("ReviewCard tests", () => {
    it("renders multiple p tags", () => {
        const review =  {
            id:1,
                description: "description",
                rating: 5,
                createdAt: new Date(),
                leader: {
                id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    jobTitle: "First Line"
            }
        }
        render(<ReviewCard review={review}/>)

        screen.logTestingPlaygroundURL()

        expect(screen.getByText('John')).toBeInTheDocument()
        expect(screen.getByText('Doe')).toBeInTheDocument()
    })
})