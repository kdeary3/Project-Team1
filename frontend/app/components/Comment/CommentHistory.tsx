

type CommentHistoryProps = {
    comment: String;
    created_at: String
};


const CommentHistory = ({comment, created_at} : CommentHistoryProps)  => {
    return (

        <div className="flex flex-col w-11/12 h-65 my-2 p-3 mb-8 border-2 rounded-xl border-black">
            <p>{comment}</p>

            <p>{created_at}</p>
        </div>
    )
}

export default CommentHistory;