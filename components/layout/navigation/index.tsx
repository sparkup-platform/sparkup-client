import Link from "next/link"
import { NAVIGATION_MENU } from "@/shared/constants/navigation"
import NavigationGroup from "./NavigationGroup"
import { IdeaModalTrigger } from "@/features/ideas/components/IdeaModal"


export default function Navigation(){
    return(
        <div className="relative min-w-[280px] h-[100vh] border-r border-[var(--color-border)] bg-background flex flex-col items-center">
            <div className="w-[100%] h-[100px] border-b border-[var(--color-border)] flex justify-center items-center">
                <h1 className="text-2xl text-[var(--orange-500)] font-extrabold">
                    <Link href="/">
                    🔥 SPARK UP
                    </Link>
                    </h1>
            </div>
            <div className="w-[100%] h-[100%] flex flex-col gap-4 p-[var(--spacing-6)] font-semibold">
                
                {NAVIGATION_MENU.map((group)=>(
                    <NavigationGroup key={group.title} group={group}/>
                ))}
                
            </div>
            <IdeaModalTrigger/>
        </div>
    )
}