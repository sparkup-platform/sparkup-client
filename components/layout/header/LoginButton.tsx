import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginButton(){

    return(
        <div className="flex flex-wrap item-center">
            <Link href="/">
                <Button 
                variant="secondary"
                 size="lg"
                 >
                    로그인
                </Button>         
            </Link>
   
        </div>

    )
}