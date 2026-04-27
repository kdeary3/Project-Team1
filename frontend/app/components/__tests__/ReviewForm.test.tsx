import {expect, describe, it, beforeEach, vi, afterEach} from "vitest";
import {render, screen} from "@testing-library/react";
import {ReviewForm} from "../ReviewForm";
import * as reviewApi from "../ReviewService"
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";

vi.mock('../ReviewService')

describe('Review Form', () => {
    const user = userEvent.setup()
    const setIsModalOpen = (isOpen: boolean) => {
        return false
    }


    it('should display form heading and fields', () => {
        render(<ReviewForm
            isOpen={true}
            onClose={() => setIsModalOpen(false)}
        />)

        expect(screen.getByRole('heading', {name: /create a review/i})).toBeInTheDocument()
        expect(screen.getByLabelText(/Enter A Review/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', {name: /review/i})).toBeInTheDocument()
        expect(screen.getByLabelText(/Enter A Rating/i)).toBeInTheDocument()
        expect(screen.getByRole('option', {name: /1/i})).toBeInTheDocument()
    });

    it('should save a review', () => {

        render(<ReviewForm
            isOpen={true}
            onClose={() => setIsModalOpen(false)}
        />)


    });

    describe('Mock Review Form', () => {
        beforeEach(() => {
            vi.clearAllMocks()
        })

        afterEach(() => {
            vi.restoreAllMocks()
        })

        it('should be able to type into fields and click submit', async () => {
            const initialReview = {
                id: 1,
                rating: 3,
                description: "good dude",
                created_at: "02-02-26",
                leader_id: 2
            }
            vi.spyOn(reviewApi, 'axiosSaveReview').mockResolvedValue(initialReview)

            render(<ReviewForm
                isOpen={true}
                onClose={() => setIsModalOpen(false)}
            />)

            screen.logTestingPlaygroundURL()

            const leader = screen.getByRole('heading', {name: ""})
            const review = screen.getByRole('textbox', {name: /review/i})
            const rating = screen.getByRole('combobox', {name: /rating/i})
            const submit = screen.getByRole('button', {name: /submit/i})

            await user.selectOptions(leader, initialReview.leader_id.toString())
            expect(leader).toHaveValue("2")

            await user.type(review, initialReview.description)
            expect(review).toHaveValue("good dude")

            await user.selectOptions(rating, initialReview.rating.toString())
            expect(rating).toHaveValue("3")

            await user.click(submit)
            expect(reviewApi.axiosSaveReview).toHaveBeenCalledOnce()

        });

        it('should pull selected leader\'s id', () => {

        });


    });

});
