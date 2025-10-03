"use client";

import React, { useState } from 'react';
import { Heart, MessageCircle, Calendar, Eye, Share2, Bookmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function IdeaDescription() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(106);


  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };


  return (

      <main className="w-[85%] mx-auto my-8">
        {/* 메인 카드 */}
        <article className="bg-white rounded-2xl border border-border-color overflow-hidden mb-6">
          {/* 카드 헤더 */}
          <div className="p-8 border-b border-gray-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  AI 기반 음성 일기 앱
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    익명의 개발자
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    조회수 156
                  </span>
                  <span>•</span>
                  <span>2시간 전</span>
                </div>
              </div>
              
              {/* 좋아요 버튼 */}
              <button
                onClick={handleLike}
                className={`flex flex-col items-center justify-center w-20 h-20 transition-all cursor-pointer ${
                  isLiked
                    ? 'text-red-500'
                    : 'text-gray-400 hover:border-red-300 hover:text-red-400'
                }`}
              >
                <Heart className={`w-6 h-6 mb-1 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-lg font-semibold">{likeCount}</span>
              </button>
            </div>

            {/* 카테고리 태그 */}
            <div className="flex gap-2">
              <Badge>모바일앱</Badge>
              <Badge>웰빙</Badge>
            </div>
          </div>

          {/* 카드 본문 */}
          <div className="p-8">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스. AI가 감정을 분석하고 개인화된 인사이트를 제공합니다. 출퇴근 시간이나 운동 중에도 쉽게 일기를 작성할 수 있어요.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">주요 기능:</h3>
              <div className="space-y-3 text-gray-700 whitespace-pre-wrap leading-[1.8rem]">
              {"- 음성 인식을 통한 자동 텍스트 변환\n- AI 감정 분석 및 인사이트 제공\n- 개인화된 질문 추천\n- 음성 메모 저장 및 재생 기능\n- 월별/연도별 감정 변화 리포트"}
              </div>
            </div>
          </div>

          {/* 카드 푸터 */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  156 조회
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  12 댓글
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2024.09.01
                </span>
              </div>
            </div>
          </div>
        </article>
      </main>
  );
}