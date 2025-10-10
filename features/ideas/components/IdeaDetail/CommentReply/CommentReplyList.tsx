import { CommentReplyCard } from "./CommentReplyCard"

export function CommentReplyList(){

    return(
        <div className="flex flex-col border-l border-border-color">
            <CommentReplyCard/>
            <CommentReplyCard/>
        </div>
    )
}