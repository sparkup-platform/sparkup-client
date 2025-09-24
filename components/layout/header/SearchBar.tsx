export default function SearchBar(){
    return(
        <div className="relative w-[700px] min-w-[500px]">
            <input 
                className="h-[40px] w-full border border-[var(--color-border)] rounded-[var(--radius)] pl-10 pr-4 text-m font-medium bg-background text-foreground placeholder:text-[var(--neutral-600)] focus:outline-none focus:ring-[1.5px] focus:ring-[var(--color-primary)] focus:border-transparent"
                placeholder="아이디어 검색"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--neutral-600)]">
                🔍
            </span>
        </div>
    )
}