import Header from "@/components/layout/header";
import SideBar from "@/components/layout/navigation";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row bg-info">
        <SideBar/>
        <div className="">
        <Header />
        {children}
        </div>
    </div>
  )
}