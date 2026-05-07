import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import type {CommentResponse} from "~/components/Comment/CommentType";
import CommentHistory from "~/components/Comment/CommentHistory";

describe ('CommentHistory Item', () => {
    it('should display single previous comment', () => {
        const previousComment1: CommentResponse = {
            comment: 'This review sucks',
            created_at: new Date().toLocaleDateString()

        }

        render(<CommentHistory comment={previousComment1.comment} created_at={previousComment1.created_at}/>);

        expect(screen.getByText('This review sucks')).toBeInTheDocument();

    });

    it('should display comment created date', () => {
        const previousComment1: CommentResponse = {
            comment: 'This review sucks',
            created_at: new Date().toLocaleDateString()

        }

        render(<CommentHistory comment={previousComment1.comment} created_at={previousComment1.created_at}/>);

        expect(screen.getByText(new Date().toLocaleDateString())).toBeInTheDocument();
    })
})