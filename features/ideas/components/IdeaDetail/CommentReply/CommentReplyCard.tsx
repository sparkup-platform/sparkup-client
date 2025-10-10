"use client"

import { useState } from "react"
import { ThumbsUp } from "lucide-react";
import { CommentReplyInput} from "../CommentReply";

export function CommentReplyCard(){

    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(8);

    const handleLike = () => {
        setIsLiked((prev) => !prev);
        setLikeCount(isLiked? likeCount-1 : likeCount+1);
    }


    return(
        <div className="w-fit m-5 flex gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
             익
        </div>
        <div className="flex-1 flex flex-col gap-3">
            <header className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="font-semibold">익명1</span>
                        <span className="text-muted-foreground text-sm">2024.09.21</span>
                    </div>
            </header>
            <p className="text-base">별별 감정 변화 리포트 기능이 정말 흥미롭네요. 이런 데이터로 비전문가인 관리에도 도움이 될 수 있을 것 같습니다.</p>
            <div className="h-8 flex gap-5 items-center">
                <button onClick={handleLike} className={`flex gap-1 align-center text-muted-foreground cursor-pointer ${isLiked ? '': 'hover:text-[var(--info)]'}`}>
                    <ThumbsUp className={`w-5 h-5 ${isLiked ? 'text-[var(--info)] fill-current' : ''}`}/>
                    <span className={`${isLiked ? 'text-[var(--info)] font-semibold' : ''}`}>{likeCount}</span>
                </button>
            </div>
        </div>
    </div>
    )
}