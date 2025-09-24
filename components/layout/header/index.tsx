import SearchBar from "./SearchBar"
import LoginButton from "./LoginButton"

export default function Header() {
  return (
    <header className="flex-shrink-0 flex items-center justify-between pl-[var(--spacing-16)] pr-[var(--spacing-12)] bg-background w-[100%] h-[70px] sticky top-[0]">
      <SearchBar/>
      <LoginButton/>
    </header>
  )
}