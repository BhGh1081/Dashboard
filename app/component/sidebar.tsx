'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdHome } from "react-icons/md";
import { SideItem } from "../lib/definision";

export default function Sidebar({ className, items }: { className?: string, items: SideItem[] }) {

    const pathname = usePathname();


    return (
        <div className={`flex md:flex-col md:w-[12%] lg:w-[25%] shadow-sm shadow-black/30 ${className}`}>

            {items.map((item, index) => {
                const LinkIcon = item.icon;
                return (
                    <Link key={index}
                        className={clsx("flex md:flex-col lg:flex-row w-full md:items-center lg:items-start gap-2 p-5 md:border-b-solid md:shadow-sm md:shadow-black/20  md:hover:bg-secondry md:hover:text-primary", item.href === pathname && 'text-primary bg-secondry')}
                        href={item.href}>
                        <LinkIcon />
                        <p>{item.name}</p>
                    </Link>
                )
            })}
        </div >
    )
}
