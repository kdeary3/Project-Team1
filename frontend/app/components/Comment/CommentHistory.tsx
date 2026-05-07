import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceAngry, faFaceGrinBeam, faFaceSadTear, faPoop} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import type {CommentPatch, CommentResponse, CommentType} from "~/components/Comment/CommentType";
import type {ReviewType} from "~/review/ReviewType";

type CommentHistoryProps = {
    id: number;
    comment: string;
    created_at: string;
    happyEmoji: number;
    sadEmoji: number;
    angryEmoji: number;
    poopEmoji: number;
    reviewId: number
};


const CommentHistory = ({id, comment, created_at, happyEmoji, sadEmoji, angryEmoji, poopEmoji ,reviewId} : CommentHistoryProps)  => {
    const [poopCount, setPoopCount] = useState(poopEmoji);
    const [sadCount, setSadCount] = useState(sadEmoji);
    const [angryCount, setAngryCount] = useState(angryEmoji);
    const [happyCount, setHappyCount] = useState(happyEmoji);

    const updateComment = async (whichCount: string) => {
        let commentPatch: CommentPatch = {
            id,
            comment,
            reviewId: reviewId,
            created_at,
            happyEmoji: happyCount,
            angryEmoji: angryCount,
            sadEmoji: sadCount,
            poopEmoji: poopCount
        }
        switch (whichCount) {
            case"happy":
                ++commentPatch.happyEmoji;
                break;
            case"angry":
                ++commentPatch.angryEmoji;
                break;
            case"sad":
                ++commentPatch.sadEmoji;
                break;
            case "poop":
                ++commentPatch.poopEmoji;
                break;
        }
        const url = "http://localhost:8080/api/v1/comment"
        try {
            let response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentPatch)

            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
        }catch(error) {
            console.error(error);
        }
    }
    const clickPoop = (count: number, emoji: string) => {

        switch(emoji) {
            case "Happy":
                setHappyCount(prevCount => prevCount + 1)
                updateComment("happy")
                console.log("Clicked happy face!");
                break;
            case "Angry":
                setAngryCount(prevCount => prevCount + 1)
                updateComment("angry")
                console.log("Clicked angry face!");
                break;
            case "Sad":
                setSadCount(prevCount => prevCount + 1)
                updateComment("sad")
                console.log("Clicked sad face!");
                break;
            case "Poop":
                setPoopCount(prevCount => prevCount + 1)
                updateComment("poop")
                console.log("Clicked poop!");
                break;

        }

    }


    return (

        <div className="flex flex-col w-11/12 h-60 my-5 p-5 border-2 rounded-xl border-blue-900 bg-slate-200">

            {/* Comment Area */}
            <div className="mt-3 space-y-3 px-4">

                <p className="p-2 px-4 h-25 border border-slate-800 rounded-xl bg-slate-100 text-start text-blue-800 text-lg focus:outline-none">{comment}</p>

                <div className="flex justify-between">
                    <p className="text-blue-800 text-lg font-medium">{created_at}</p>

                    <div className="flex space-x-5 pt-2">
                        <div className="flex flex-col items-center space-y-2">
                            <FontAwesomeIcon icon={faFaceGrinBeam} className="space-x-3 text-2xl hover:text-green-600" onClick={() => clickPoop(happyCount, "Happy")} />
                            <p>{happyCount}</p>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                            <FontAwesomeIcon icon={faFaceAngry} className="space-x-3 text-2xl hover:text-red-500" onClick={() => clickPoop(angryCount, "Angry")}/>
                            <p>{angryCount}</p>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                            <FontAwesomeIcon icon={faFaceSadTear} className="space-x-3 text-2xl hover:text-blue-500" onClick={() => clickPoop(sadCount, "Sad")} />
                            <p>{sadCount}</p>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                            <FontAwesomeIcon icon={faPoop} className="space-x-3 text-2xl hover:text-amber-950 hover:rotate-360 duration-1000" onClick={() => clickPoop(poopCount, "Poop")} />
                            <p>{poopCount}</p>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

export default CommentHistory;