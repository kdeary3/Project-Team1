import {expect, describe, it, beforeEach, vi, afterEach} from "vitest";
import {render, screen} from "@testing-library/react";
import {LeaderForm} from "~/components/LeaderForm";
import * as leaderApi from "../LeaderService"
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";
import {waitFor} from "@testing-library/dom";


vi.mock('../LeaderService')

describe('Leader Form', () => {
    const user = userEvent.setup()
    const setIsModalOpen = (isOpen: boolean) => {
        return false
    }


    it('should display form heading and fields', () => {
        render(<LeaderForm
            isOpen={true}
            onClose={() => setIsModalOpen(false)}
        />)

        expect(screen.getByRole('heading', {name: /create a leader/i})).toBeInTheDocument()
        expect(screen.getByRole('textbox', {name: /enter a first name/i})).toBeInTheDocument()
        expect(screen.getByRole('textbox', {name: /enter a last name/i})).toBeInTheDocument()
        expect(screen.getByRole('textbox', {name: /enter a job title/i})).toBeInTheDocument()


    });

    it('should save a leader', () => {

        render(<LeaderForm
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
            const initialLeader = {
                id: 1,
                firstName: "Keno",
                lastName: "Kai",
                jobTitle: "Hobo"
            }

            const mockCreateLeader = vi.spyOn(leaderApi, 'axiosSaveLeader').mockResolvedValueOnce(initialLeader)

            render(<LeaderForm
                isOpen={true}
                onClose={() => setIsModalOpen(false)}
            />)

            screen.logTestingPlaygroundURL()

            const leaderFirstName = screen.getByRole('textbox', {name: /enter a first name/i})

            const leaderLastName = screen.getByRole('textbox', {name: /enter a last name/i})
            const leaderJobTitle = screen.getByRole('textbox', {name: /enter a job title/i})

            const submit = screen.getByRole('button', {name: /submit/i})

            await user.type(leaderFirstName, initialLeader.firstName)
            expect(leaderFirstName).toHaveValue("Keno")

            await user.type(leaderLastName, initialLeader.lastName)
            expect(leaderLastName).toHaveValue("Kai")

            await user.type(leaderJobTitle, initialLeader.jobTitle)
            expect(leaderJobTitle).toHaveValue("Hobo")


            await user.click(submit)
            expect(mockCreateLeader).toHaveBeenCalledOnce();

        });



    });

});
