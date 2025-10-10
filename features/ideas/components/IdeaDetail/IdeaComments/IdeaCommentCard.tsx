"use client"

import { useState } from "react"
import { ThumbsUp } from "lucide-react";
import { CommentReplyInput, CommentReplyList, CommentReplyCard } from "../CommentReply";

export function IdeaCommentCard(){

    const [openRecomment, setOpenRecomment] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(8);

    const handleLike = () => {
        setIsLiked((prev) => !prev);
        setLikeCount(isLiked? likeCount-1 : likeCount+1);
    }

    const handleRecomment = () => {
        setOpenRecomment((prev) => !prev)
    }

    return(
        <div className="w-fit m-8 pb-10 flex gap-5 border-b border-border-color">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                 익
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <header className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="font-semibold">익명1</span>
                            <span className="text-muted-foreground text-sm">2024.09.21</span>
                        </div>
                </header>
                <p className="text-base">정말 좋은 아이디어네요! 특히 AI 감정 분석 기능이 인상적입니다. 다만 개인정보 보호 측면에서 충분히 고려되었으면 좋겠습니다. 로컬에서 처리하는지, 클라우드를 사용하는지에 대한 설명이 있으면 좋겠어요.</p>
                <div className="h-8 flex gap-5 items-center">
                    <button onClick={handleLike} className={`flex gap-1 align-center text-muted-foreground cursor-pointer ${isLiked ? '': 'hover:text-[var(--info)]'}`}>
                        <ThumbsUp className={`w-5 h-5 ${isLiked ? 'text-[var(--info)] fill-current' : ''}`}/>
                        <span className={`${isLiked ? 'text-[var(--info)] font-semibold' : ''}`}>{likeCount}</span>
                    </button>
                    <button onClick={handleRecomment} className="text-s text-muted-foreground cursor-pointer" >
                        {openRecomment ? <>답글 닫기</> : <>답글 작성</>}
                    </button>
                </div>
                {openRecomment ? <CommentReplyInput/> : null}
                <CommentReplyList/>
            </div>
        </div>
    )
}