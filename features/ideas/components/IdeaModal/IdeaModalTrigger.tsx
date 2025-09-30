'use client'

import { Button } from "@/components/ui/button"
import { useStore } from "zustand";
import { ideaModalStore } from "../../store/ideaModalStore"

export function IdeaModalTrigger(){

    const openModal = useStore(ideaModalStore, (state) => state.openModal);

    return(
        <Button className="absolute bottom-[30px] w-[200px] h-[45px] text-base" onClick={openModal}>아이디어 생성</Button>
    )
}