import Header from "../Header";
import Navigation from "../Navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-row bg-background h-screen">
          <Navigation/>
          <div className="flex-1 flex flex-col overflow-auto">
                  <Header />
              <div className="flex flex-col py-[var(--spacing-5)] px-[var(--spacing-8)]">
              {children}
              </div>
          </div>
      </div>
    )
  }