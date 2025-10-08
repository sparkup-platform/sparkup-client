import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IdeaCard() {

    return(
        <div className="w-full p-6 flex flex-col gap-4 border border-[var(--color-border)] rounded-[var(--radius-lg)] hover:shadow-md hover:border-[var(--color-primary)] transition-[border-color,box-shadow] duration-100">
        <header className="flex justify-between items-start">
            <div>
                {/* <span className="text-sm text-muted-foreground">익명의 개발자</span> */}
                <h3 className="text-lg font-semibold mt-1">AI기반 음성 인식 앱</h3>
            </div>
            <span className="text-sm text-muted-foreground">2시간 전</span>
        </header>
        
        <main className="flex-1">
            <p className="text-sm text-foreground line-clamp-3">
                바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스...바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스...바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스...바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스...바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스...바쁜 현대인들을 위한 음성으로 작성하는 일기 서비스...
            </p>
            <div className="flex gap-2 mt-3">
                <span className="px-2 py-1 bg-muted rounded-full text-xs">AI/ML</span>
                <span className="px-2 py-1 bg-muted rounded-full text-xs">모바일앱</span>
            </div>
        </main>
        
        <footer className="flex justify-between items-center pt-3 border-t border-[var(--color-border)]">
            <div className="flex gap-4 text-sm text-muted-foreground">
                <span>👁 156</span>
                <span>❤️ 23</span>
                <span>💬 8</span>
            </div>
            <Button><Link href="/idea/sd">아이디어 참여</Link></Button>
        </footer>
    </div>
    )
}