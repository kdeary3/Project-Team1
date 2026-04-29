import {describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "~/routes/home";

describe("Home",  () => {
    it("should renders list of review cards", async() => {

        render(<Home/>)
        screen.logTestingPlaygroundURL()
        await screen.findAllByTestId('card')

    })
})