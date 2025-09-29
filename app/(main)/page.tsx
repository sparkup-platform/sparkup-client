import IdeaPageHeader from "@/features/ideas/components/IdeaPageHeader"
import IdeaList from "@/features/ideas/components/IdeaList"

export default function Home() {

    return(
        <div className="h-[150vh]">
            <IdeaPageHeader/>
            <IdeaList/>
        </div>
    )
  }
  