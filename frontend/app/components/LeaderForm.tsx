import * as Yup from "yup"
import {date, number, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/src";
import type {LeaderType} from "~/leader/LeaderType";
import axios from "axios";
import {axiosSaveLeader} from "~/leader/LeaderService";


const validation = Yup.object({
    id: number(),
    firstName: string()
        .required("Enter first name"),
    lastName: string()
        .required("Enter last name"),
    jobTitle: string()
        .required("Enter job title"),
})

type LeaderFormProps = {
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export const LeaderForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<LeaderType>({
        mode: "onBlur",
        resolver: yupResolver(validation)
    });

    const onSubmit = async (data: LeaderType) => {
        console.log(data)
        await axiosSaveLeader(data);
        reset()
    }

    return (
        <>
            <h1>Create a Leader</h1>
            <form action="" onSubmit={handleSubmit(data => onSubmit(data))}>
                <label htmlFor="firstName"> Enter a first name.
                    <input
                        className={"border border-b-gray-900 focus:outline-none"}
                        type="text"
                        id={'firstName'}
                        {...register('firstName')}
                    />
                </label> <br/>
                {/*<label htmlFor="rating"> Enter a rating.*/}
                {/*    <select id="rating"*/}
                {/*            {...register("rating")}>*/}
                {/*        <option value="1">1</option>*/}
                {/*        <option value="2">2</option>*/}
                {/*        <option value="3">3</option>*/}
                {/*        <option value="4">4</option>*/}
                {/*        <option value="5">5</option>*/}
                {/*    </select>*/}
                {/*</label> <br/>*/}
                <label htmlFor="lastName"> Enter a last name.
                    <input
                        className={"border border-b-gray-900 focus:outline-none"}
                        type="text"
                        id={'lastName'}
                        {...register('lastName')}
                    />
                </label> <br/>
                <label htmlFor="jobTitle"> Enter a job title.
                    <input
                        className={"border border-b-gray-900 focus:outline-none"}
                        type="text"
                        id={'jobTitle'}
                        {...register('jobTitle')}
                    />
                </label> <br/>
                <button
                    className={"bg-olive-500 rounded-sm"}
                    type={"submit"}>Submit</button>
            </form>
        </>
    );
}

export default LeaderForm;
