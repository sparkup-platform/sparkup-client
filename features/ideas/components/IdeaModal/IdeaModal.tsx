'use client'

import { useStore } from "zustand";
import { ideaModalStore } from "../../store/ideaModalStore";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export default function IdeaModal() {
  const isOpen = useStore(ideaModalStore, (state) => state.isOpen);
  const closeModal = useStore(ideaModalStore, (state) => state.closeModal);
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // 아이디어 생성 로직
    console.log({ title, description, isPublic });
    closeModal();
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setIsPublic(true);
    closeModal();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div 
        className="w-full max-w-[700px] bg-white rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-start justify-between p-8 pb-6">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            아이디어를 공유하고 사람들과 함께 발전시켜보세요
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
          >
            <X size={24} className="cursor-pointer" />
          </button>
        </div>

        {/* 설명 */}
        <div className="px-8 pb-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            사람들과 발전시키고 싶은 아이디어, 번뜩인 아이디어,<br />
            영감을 줄 수 있는 기발한 아이디어들을 자유롭게 등록해보세요.
          </p>
        </div>

        {/* 폼 */}
        <div className="px-8 pb-6 space-y-6">
          {/* 아이디어 제목 */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              아이디어
            </label>
            <input
              type="text"
              placeholder="아이디어의 제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[var(--info)] focus:bg-white transition-all"
            />
          </div>

          {/* 아이디어 설명 */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              아이디어 설명
            </label>
            <textarea
              placeholder="아이디어의 구체적인 설명, 혹은 사람들과 이야기를 나누고 싶은 부분들에 대해 작성해주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[var(--info)] focus:bg-white transition-all resize-none"
            />
          </div>

          {/* 공개 설정 안내 */}
          <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
            <p>스파크업은 아이디어의 자유로운 공유와 발전을 지향하고 있습니다.</p>
            <p>
              아이디어 작성자는 익명으로 등록되고 있으며, 게시된 아이디어는 여러 사람들에게 공유 및 참고 될 수 있습니다.
            </p>
            <p>
              또한 법적/윤리적으로 부적절한 아이디어 혹은 아이디어와 무관한 글이 게시될 경우,<br />
              운영진에 의해 글이 삭제 될 수 있습니다.
            </p>
          </div>

          {/* 동의 체크박스 */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="agree"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-gray-300 text-gray-700 focus:ring-2 focus:ring-gray-300 cursor-pointer"
            />
            <label htmlFor="agree" className="text-base font-semibold text-gray-900 cursor-pointer">
              동의함
            </label>
          </div>
        </div>

        {/* 푸터 버튼 */}
        <div className="flex gap-3 px-8 pb-8 pt-4">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="flex-1 h-12 text-base font-semibold border-2 border-gray-300 hover:bg-gray-50"
          >
            취소
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!title.trim() || !description.trim() || !isPublic}
            className="flex-1 h-12 text-base font-semibold hover:bg-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            아이디어 생성
          </Button>
        </div>
      </div>
    </div>
  );
}