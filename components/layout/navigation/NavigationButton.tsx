"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";

type NavigationButton = {
    label : string;
    icon ?: string;
    href : string;
}

export default function NavigationButton({label, href, icon} : NavigationButton){

    return(
        <Button
        variant="ghost"
        size="lg"
        className="h-[55px] hover:bg-[var(--neutral-100)] text-neutral-600 active:bg-[var(--color-info)] active:text-[var(--neutral-50)] justify-start items-center text-base">
        <span>{icon}</span>            
        <Link href="/theme-test">
        {label}</Link>
        </Button>
    )

}