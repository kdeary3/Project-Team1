import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "../Navbar";
import {MemoryRouter} from "react-router";

describe('NavBar', () => {
    it('should display Navbar with Rate My Leader text', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>

        );

        screen.logTestingPlaygroundURL()
        expect(screen.getByText('Rate My Leader')).toBeInTheDocument();
    });
    it('should display leader and review in navbar', () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        screen.logTestingPlaygroundURL()
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Rating Form')).toBeInTheDocument()

    });
});