"use client"

import { useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type NavigationButton = {
    id: string;
    label : string;
    icon ?: string;
    href : string;
}

export default function NavigationButton({id, label, href, icon} : NavigationButton){

    const pathname = usePathname().split("/")[1];
    const isActive = pathname === id;


    return(
        <Button
        variant="ghost"
        size="lg"
        className={`h-[55px] justify-start items-center text-base 
        ${isActive ? "text-white bg-info-600 hover:bg-[var(--info-600)]" : "text-neutral-600 hover:bg-[var(--neutral-100)]" }`}>
        <span>{icon}</span>            
        <Link href={href}>
        {label}</Link>
        </Button>
    )

}