'use client';

import Link from "next/link";
import { MdHome } from "react-icons/md";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar({ className }: { className?: string }) {

    const pathname = usePathname();

    const links = [
        { name: 'Home', href: `/dashboard`, icon: MdHome},
        { name: 'Customers', href: '/dashboaed/Customer', icon: MdHome },
        { name: 'Invoices', href: '/dashboard/invoices', icon: MdHome},
    ]
    return (
        <div className="md:hidden flex w-full h-[70px] justify-between px-4 shadow-sm shadow-black">

            {links.map((item, index) => {
                const LinkIcon = item.icon
                return (
                    <Link
                        key={index}
                        href={item.href}
                        className={clsx("w-full flex flex-col justify-center items-center", pathname === item.href && 'text-primary')} >
                        <LinkIcon className="w-10 h-10" />
                        <p className="text-[.9rem] active:text-primary">{item.name}</p>
                    </Link>)
            }
            )}
        </div >
    )

}