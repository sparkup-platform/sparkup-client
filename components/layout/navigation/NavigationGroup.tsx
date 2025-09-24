import { MenuGroup } from "@/shared/types/navigation"
import NavigationButton from "./NavigationButton"

type NavigationGroupProps ={
    group : MenuGroup
}

export default function NavigationGroup({group} : NavigationGroupProps){


    return(
        <div className="flex flex-col w-[100%] text-neutral-600">
            <h3 className="text-base">{group.title}</h3>
            <li className="pt-[10px] flex flex-col w-[100%] gap-1">
            {group.items.map((e)=>(
                <NavigationButton key={e.id} label={e.label} href={e.href} icon={e.icon}/>
            ))}        
            </li>
        </div>
    )
}