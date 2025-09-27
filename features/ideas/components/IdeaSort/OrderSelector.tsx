import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function OrderSelector(){
    return(
        <>
            <Select>
                <SelectTrigger className="border-border-color">
                    <SelectValue placeholder="최신순" />
                </SelectTrigger>
                <SelectContent className="border-border-color w-[50px]">
                    <SelectItem value="최신순" >최신순</SelectItem>
                    <SelectItem value="좋아요순">인기순</SelectItem>
                    <SelectItem value="댓글순">댓글순</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}