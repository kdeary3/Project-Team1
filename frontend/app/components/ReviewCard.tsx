import type {ReviewType} from "~/review/ReviewType";
import type {CommentRequest} from "~/components/Comment/CommentType";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/src";
import * as Yup from "yup";
import {date, number, string} from "yup";


const validation = Yup.object({
    reviewId: number(),
    comment: string().required()
})

type ReviewCardProps = {
    review: ReviewType;
};

export default function ReviewCard({review}: ReviewCardProps) {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<CommentRequest>({
        mode: "onBlur",
        resolver: yupResolver(validation)
    });

    const onSubmit = async (data: CommentRequest) => {
        const url = "http://localhost:8080/api/v1/comment"
        console.log(data)
        try {
            let response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }

    }


return (
    <div className="flex flex-col items-center border border-gray-800 rounded-xl my-5 p-5">
        <ul className="w-full mb-4">
            <li><strong>First: </strong>{review.leader.firstName}</li>
            <li><strong>Last: </strong>{review.leader.lastName}</li>
            <li><strong>Rating: </strong>{review.rating}</li>
            <li><strong>Review: </strong>{review.description}</li>
        </ul>

        <form
            className="w-full flex items-center item gap-2"
            action="" onSubmit={handleSubmit(data => onSubmit(data))}
        >

            <div className="flex flex-col w-3/4 h-20">
                <input type={'hidden'} value={review.id} {...register('reviewId')}/>

                <input
                    type="text"
                    placeholder="Leave a comment"
                    className="p-2 px-4 w-full h-20 border border-black rounded-lg text-start text-black text-lg placeholder:text-gray-400 "
                    {...register('comment')}
                />
            </div>

            <div className="flex justify-end">
                <button className="px-5 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-900 transition"
                        type="submit">Post Comment
                </button>
            </div>

        </form>

    </div>

)
}