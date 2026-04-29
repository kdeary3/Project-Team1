import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { beforeAll, afterAll, afterEach ,describe, it, expect, vi} from 'vitest';
import type {ReviewType} from "~/review/ReviewType";
import * as reviewservice from "../../review/ReviewService";

vi.mock("../../review/ReviewService.ts")


describe('review service', () => {

    const server = setupServer();
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    it('should return a list of review', async () => {
        const expected: ReviewType[] =  [
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Charismatic but inconsistent. Team morale is high though results are unpredictable.",
                id: 1,
                leader: {
                    firstName: "Michael",
                    lastName: "Scott",
                    jobTitle: "Regional Manager",
                    id: 1
                },
                rating: 3
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Demanding and exacting. Delivers results under pressure but struggles with approachability.",
                id: 2,
                leader: {
                    firstName: "Miranda",
                    lastName: "Priestley",
                    jobTitle: "Editor in Chief",
                    id: 2
                },
                rating: 4
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Exceptional at building team culture and trust. Leads with empathy and gets the best out of people.",
                id: 3,
                leader: {
                    firstName: "Ted",
                    lastName: "Lasso",
                    jobTitle: "Head Coach",
                    id: 3
                },
                rating: 5
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Tireless advocate for her team. Brings unmatched energy and genuine care to every initiative.",
                id: 4,
                leader: {
                    firstName: "Leslie",
                    lastName: "Knope",
                    jobTitle: "Deputy Director of Parks and Rec",
                    id: 4
                },
                rating: 5
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Commands respect through integrity and professionalism. Sets an unwavering standard of conduct.",
                id: 5,
                leader: {
                    firstName: "Captain",
                    lastName: "Raymond Holt",
                    jobTitle: "Police Captain",
                    id: 5
                },
                rating: 5
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Politically savvy and results-driven, but prioritizes personal agenda over team cohesion.",
                id: 6,
                leader: {
                    firstName: "Shiv",
                    lastName: "Roy",
                    jobTitle: "President of Domestic Operations",
                    id: 6
                },
                rating: 3
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Brilliant diagnostician and unconventional thinker. Difficult to manage but delivers when it counts.",
                id: 7,
                leader: {
                    firstName: "Gregory",
                    lastName: "House",
                    jobTitle: "Head of Diagnostic Medicine",
                    id: 7
                },
                rating: 4
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Straightforward and no-nonsense. Team knows exactly where they stand and respects his consistency.",
                id: 8,
                leader: {
                    firstName: "Ron",
                    lastName: "Swanson",
                    jobTitle: "Director of Parks and Rec",
                    id: 8
                },
                rating: 4
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Calm under pressure with exceptional crisis instincts. Inspires confidence in high-stakes situations.",
                id: 9,
                leader: {
                    firstName: "Olivia",
                    lastName: "Pope",
                    jobTitle: "Crisis Manager",
                    id: 9
                },
                rating: 5
            },
            {
                createdAt: "2026-04-24T15:42:08.70204",
                description: "Effective at achieving outcomes but methods raise serious ethical concerns.",
                id: 10,
                leader: {
                    firstName: "Tony",
                    lastName: "Soprano",
                    jobTitle: "Waste Management Consultant",
                    id: 10
                },
                rating: 2
            }
        ]
        vi.mocked(reviewservice.axiosGetAllReviews).mockResolvedValue(expected);



        expect(await reviewservice.axiosGetAllReviews())
            .toEqual(expected);
    });
});