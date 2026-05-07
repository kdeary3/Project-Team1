import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faThumbsDown, faThumbsUp} from "@fortawesome/free-solid-svg-icons";

type CommentHistoryProps = {
    comment: String;
    created_at: String
};


const CommentHistory = ({comment, created_at} : CommentHistoryProps)  => {
    return (

        <div className="flex flex-col w-11/12 h-50 my-5 p-5 border-2 rounded-xl border-blue-900 bg-slate-200">

            {/* Comment Area */}
            <div className="mt-3 space-y-3 px-4">

                <p className="p-2 px-4 h-25 border border-slate-800 rounded-xl bg-slate-100 text-start text-blue-800 text-lg focus:outline-none">{comment}</p>

                <div className="flex justify-between">
                    <p className="text-blue-800 text-lg font-medium">{created_at}</p>

                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} className="text-3xl hover:text-green-500 hover:rotate-5 px-2" />
                        <FontAwesomeIcon icon={faThumbsDown} className="text-3xl hover:text-red-500 hover:rotate-360 duration-500 px-2" />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default CommentHistory;