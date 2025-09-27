import { CategorySelector } from "./CategorySelector";
import { OrderSelector } from "./OrderSelector";

export default function IdeaSort(){

    return(
        <div className="flex gap-[20px]">
            <CategorySelector/>
            <OrderSelector/>
        </div>
    )
}