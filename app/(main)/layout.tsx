import Header from "@/components/layout/header";
import SideBar from "@/components/layout/navigation";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row bg-info h-screen">
        <SideBar/>
        <div className="flex-1 flex flex-col overflow-auto">
                <Header />
            <div className="flex flex-col p-[var(--spacing-5)]">
            {children}
            </div>
        </div>
    </div>
  )
}