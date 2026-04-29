import {Link} from "react-router";
import LeadersDropdown from "../components/LeadersDropdown";
import * as Yup from "yup"
import {date, number, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/src";
import type {ReviewType} from "~/review/ReviewType"
import {useEffect, useState} from "react";
import {axiosSaveReview} from "./ReviewService"
import type {LeaderType} from "~/leader/LeaderType";
import axios from "axios";


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
    const [leaderId, setLeaderId] = useState(0)
    const [selectedLeader, setSelectedLeader] = useState<LeaderType | null>(null);
    const [leaders, setLeaders] = useState<LeaderType[]>([]);

    useEffect(() => {
        axios.get('/api/leaders')
            .then(r => setLeaders(r.data))
            .catch(err => console.error('Failed to fetch leaders:', err));
    }, []);

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
        await axiosSaveReview({...data,
            leader: selectedLeader
    });
        reset()

    }
    console.log(leaderId)
    return (
        <>
            <h1>Create a review</h1>
            <form action="" onSubmit={handleSubmit(data => onSubmit(data))}>
                {/*<LeadersDropdown onLeaderSelect={setSelectedLeader()}/>*/}
                <label htmlFor="leader">Select Leader:</label>
                <select
                    id="leader"
                    onChange={(e) => {
                        const found = leaders.find(l => l.id === Number(e.target.value));
                        setSelectedLeader(found || null);
                    }}
                >
                    {/*SELECT A LEADER & MAPS THROUGH THEIR FIRST AND LAST NAME*/}
                    <option value="">-- Select a Leader --</option>
                    {leaders.map(leader => (
                        <option key={leader.id} value={leader.id}>
                            {leader.firstName} {leader.lastName}
                        </option>
                    ))}
                </select>
                <label htmlFor="review"> Enter a review.
                    <input
                        className={"border border-b-gray-900 focus:outline-none"}
                        type="text"
                           id={'review'}
                           {...register('description')}
                    />
                </label> <br/>
                <label htmlFor="rating"> Enter a rating.
                    <select id="rating"
                            {...register("rating")}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label> <br/>
                <button
                    className={"bg-olive-500 rounded-sm"}
                    type={"submit"}>Submit</button>
            </form>
        </>
    );
}

export default ReviewForm;
