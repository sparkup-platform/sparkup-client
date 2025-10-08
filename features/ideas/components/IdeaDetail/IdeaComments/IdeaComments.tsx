import { IdeaCommentInput } from "./IdeaCommentInput"
import { IdeaCommentList } from "./IdeaCommentList"

export default function IdeaComments(){
    return(
        <section className="w-[85%] mx-auto my-8 rounded-2xl border border-border-color">
            <div className="flex flex-col">
                <header className="p-8">
                    <h2 className="text-2xl font-semibold">댓글 N개</h2>
                </header>
                <IdeaCommentInput />
                <IdeaCommentList />
            </div>
        </section>
    )
}