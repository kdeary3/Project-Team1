import {expect, describe, it, beforeEach, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import ReviewForm from "../ReviewForm";
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";
import type {Review} from "~/components/ReviewType";
import * as reviewApi from "../ReviewService"


// vi.mock('../ReviewService')
describe('Review Form', () => {
    // const user = userEvent.setup()
    const setIsModalOpen = (isOpen: boolean) => {
        false
    }
    // const demoReview: Review =
    //     {id: 1, rating: 3, description: "good dude", created_at: "02-02-26", leader_id: 2}
    // vi.spyOn(reviewApi, 'axiosSaveReview').mockResolvedValue(demoReview);

    it('should display form heading and fields', () => {
        // render(<ReviewForm onClose={() => setIsModalOpen(false)} isOpen={true}/>)
        render(<ReviewForm isOpen={true} onClose={() => setIsModalOpen(false)}
        />)

        expect(screen.getByRole('heading', {name: /create a review/i})).toBeInTheDocument()
        expect(screen.getByLabelText(/Enter A Review/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', {name: /review/i})).toBeInTheDocument()
        expect(screen.getByLabelText(/Enter A Rating/i)).toBeInTheDocument()
        expect(screen.getByRole('option', {name: /1/i})).toBeInTheDocument()
    });
    it('should save a review', () => {

        render(<ReviewForm isOpen={true} onClose={() => setIsModalOpen(false)}
                           />)


    });

});
