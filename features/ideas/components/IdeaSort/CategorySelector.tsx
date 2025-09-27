import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

const categories = ["전체", "웹/앱", "게임", "도구", "기타"]

export function CategorySelector(){

    return(
        <div>
            <Tabs defaultValue="전체">
                <TabsList className="h-[40px] min-w-[320px]">
                    {categories.map((category)=>
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>)}
                </TabsList>
            </Tabs>
        </div>
    )
}