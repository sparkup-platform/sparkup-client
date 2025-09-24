import MainLayout from "@/components/layout/MainLayout";

export default function MyGroupLayout({children} : {children: React.ReactNode}){
    return(
        <MainLayout>
            {children}
        </MainLayout>
    )
}