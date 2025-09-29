import IdeaSort from "../IdeaSort"

export function IdeaListHeader(){

    return(
        <header className="flex justify-between py-[12px] font-semibold text-2xl">
            <h2>💡 아이디어 둘러보기</h2>
            <div>
                <IdeaSort/>
            </div>
       </header>
    )

}