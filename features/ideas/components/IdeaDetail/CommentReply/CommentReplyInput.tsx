"use client"

import {useState} from "react";
import { Button } from "@/components/ui/button";


export function CommentReplyInput(){

    const [comment, setComment] = useState('');

    return(
        <form className="flex gap-3 py-5 pr-6">
        <div className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder= "이 아이디어에 대한 의견을 남겨주세요. 개선점, 추가 기능, 우려사항을 자유롭게 작성해주세요."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
            rows={3}
          />
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>익명으로 작성됩니다</span>
            </div>
            <Button
                type='submit'
                onClick={()=>{}}
                disabled={!comment.trim()}
            >
                답글 작성
            </Button>
          </div>
        </div>
      </form>
    )
}