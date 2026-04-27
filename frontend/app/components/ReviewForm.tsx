import {Link} from "react-router";
import LeadersDropdown from "../components/LeadersDropdown";
import * as Yup from "yup"
import {date, number, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/src";
import {useEffect} from "react";
import {axiosSaveReview} from "~/review/ReviewService"
import type {ReviewType} from "~/review/ReviewType";


const validation = Yup.object({
    id: number(),
    rating: number()
        .required("Enter rating"),
    description: string()
        .required("Enter description"),
    created_at: date(),
    leader_id: number()
})


type ReviewFormProps = {
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}


export const ReviewForm = ({isOpen, onClose, onSuccess}: ReviewFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ReviewType>({
        mode: "onBlur",
        resolver: yupResolver(validation)
    });

    useEffect(() => {
        if (!isOpen) {
            reset()
        }
    }, [isOpen]);

    const onSubmit = async (data: ReviewType) => {
        await axiosSaveReview(data)
        reset()
        onSuccess?.()
        onClose()
    }


    return (
        <>
            <h1>Create a review</h1>
            <LeadersDropdown/>
            <form action="" onSubmit={handleSubmit(data => onSubmit(data))}>
                <label htmlFor="review"> Enter a review.
                    <input type="text" id={'review'}{...register('description')}/>
                </label> <br/>
                <label htmlFor="rating"> Enter a rating.
                    <select id="rating" {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label> <br/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    );
}

export default ReviewForm;
