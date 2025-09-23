import Link from "next/link"
import { NAVIGATION_MENU } from "@/shared/constants/navigation"
import NavigationGroup from "./NavigationGroup"


export default function Navigation(){
    return(
        <div className="min-w-[300px] h-[100vh] bg-background flex flex-col items-center">
            <div className="w-[100%] h-[100px] border-b border-[var(--neutral-300)] flex justify-center items-center">
                <h1 className="text-3xl text-[var(--orange-500)] font-bold">
                    <Link href="/">
                    🔥 SPARK UP
                    </Link>
                    </h1>
            </div>
            <div className="w-[100%] h-[100%] flex flex-col gap-4 p-[var(--spacing-5)]">
                
                {NAVIGATION_MENU.map((group)=>(
                    <NavigationGroup key={group.title} group={group}/>
                ))}
                
            </div>
        </div>
    )
}