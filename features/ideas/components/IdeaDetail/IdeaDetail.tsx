import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import IdeaDescription from "./IdeaDescription"
import IdeaComments from "./IdeaComments"

export default function IdeaDetail(){
    return(
        <div className="flex flex-col gap-3">
            <Link className="w-fit py-[7px] px-[12px] flex gap-1 items-center rounded-[8px] text-[var(--neutral-600)] hover:bg-neutral-100 hover:text-black transition-[text-color,background-color] duration-100" href="/">
                <ArrowLeft />
                <p className="text-lg">아이디어 목록으로 돌아가기</p>
            </Link>
            <IdeaDescription/>
            <IdeaComments/>
        </div>
    )
}