import SearchBar from "./SearchBar"
import LoginButton from "./LoginButton"

export default function Header() {
  return (
    <header className="w-[100%] h-[75px] flex-shrink-0 flex items-center justify-between pl-[var(--spacing-16)] pr-[var(--spacing-12)] border-b border-[var(--color-border)] bg-background sticky top-[0]">
      <SearchBar/>
      <LoginButton/>
    </header>
  )
}