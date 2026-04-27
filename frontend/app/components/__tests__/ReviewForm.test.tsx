import {expect, describe, it} from "vitest";
import {render, screen} from "@testing-library/react";
import ReviewForm from "../ReviewForm";
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";

describe('Review Form', () => {
    const user = userEvent.setup()
    const setIsModalOpen = (isOpen: boolean) => {
        false
    }


    it('should display form heading and fields', () => {
        // render(<ReviewForm onClose={() => setIsModalOpen(false)} isOpen={true}/>)
        render(<ReviewForm />)

        expect(screen.getByRole('heading', {name: /create a review/i})).toBeInTheDocument()
        expect(screen.getByLabelText(/Enter A Review/i)).toBeInTheDocument()
        expect(screen.getByRole('textbox', {name: /review/i})).toBeInTheDocument()
        expect(screen.getByLabelText(/Enter A Rating/i)).toBeInTheDocument()
        expect(screen.getByRole('option', {name: /1/i})).toBeInTheDocument()
    });
});
