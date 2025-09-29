import { IdeaListHeader } from "./IdeaListHeader"
import IdeaCard from "../IdeaCard"

const dummy = [1,2,3,4,5,6]

export default function IdeaList(){
    return(
       <div>
        <IdeaListHeader/>
        <div className="mx-[2rem] my-[1.2rem] flex flex-col gap-[1.2rem]">
            {dummy.map((e,i)=><IdeaCard key={i}/>)}
        </div>
       </div>
    )
}