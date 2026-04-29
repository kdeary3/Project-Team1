import {HttpResponse, http} from 'msw';
import {setupServer} from 'msw/node';
import {beforeAll, afterAll, afterEach, describe, it, expect} from 'vitest';
import type {LeaderType} from "~/leader/LeaderType";
import {getAllLeaders, axiosSaveLeader} from "~/leader/LeaderService";
import axios from "axios";


describe('leader service', () => {

    const server = setupServer();
    beforeAll(() => {
    server.listen();
    axios.defaults.baseURL = "http://localhost:8080";
    });
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    it('should return a list of leaders', async () => {
        const expected: LeaderType[] = [
            {id: 1, firstName: "Joe", lastName: "Mama", jobTitle: "Supreme Overlord"},
            {id: 2, firstName: "Stacy's", lastName: "Mom", jobTitle: "Supreme Undermalord"}
        ]

        server.use(
            http.get('/api/leaders', () =>
                HttpResponse.json(expected, {status: 200})
            )
        )
        expect(await getAllLeaders()).toEqual(expected);
    });

    it('should save a leader', async () => {
        const newLeader: LeaderType = {id: 1, firstName: "Joe", lastName: "Mama", jobTitle: "Supreme Overlord"};

        server.use(
            http.post('http://localhost:8080/api/leaders', () =>
                HttpResponse.json(newLeader, {status: 201})
            )
        )
        expect(await axiosSaveLeader(newLeader)).toStrictEqual(newLeader);
    });
});