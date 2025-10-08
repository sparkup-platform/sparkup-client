import { IdeaCommentCard } from "./IdeaCommentCard"

export function IdeaCommentList(){

    return(
        <div className="flex flex-col">
            <IdeaCommentCard/>
            <IdeaCommentCard/>
            <IdeaCommentCard/>
            <IdeaCommentCard/>
        </div>
    )
}