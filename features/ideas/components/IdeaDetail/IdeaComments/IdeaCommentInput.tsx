"use client";

import React, { useState } from 'react';


export function IdeaCommentInput({ 
}) {
  const [comment, setComment] = useState('');



  return (
    <form className="flex gap-3 p-8 border-b border-border-color">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
        익
      </div>
      <div className="flex-1">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder= "이 아이디어에 대한 의견을 남겨주세요. 개선점, 추가 기능, 우려사항을 자유롭게 작성해주세요."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
          rows={3}
        />
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-4 h-4 rounded bg-gray-300" />
            <span>익명으로 작성됩니다</span>
          </div>
          <button
            type='submit'
            onClick={()=>{}}
            disabled={!comment.trim()}
            className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-400 transition-colors font-medium"
          >
            댓글 작성
          </button>
        </div>
      </div>
    </form>
  );
}