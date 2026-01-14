import React from "react";
import TopBar from "../component/topBar";
import Sidebar from "../component/sidebar";
import NavBar from "../component/navBar";
import { MdHome } from "react-icons/md";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const items = [
        { name: 'Home', href: '/dashboard', icon: 'MdHome' },
        { name: 'Customers', href: '/dashboard/customers', icon: 'MdHome' },
        { name: 'Invoices', href: '/dashboard/invoices', icon: 'MdHome' }
    ]

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <TopBar />
            <div className="flex flex-col md:flex-row 500 flex-1">
                <Sidebar items={items} className="hidden md:flex" />
                <div className="w-full h-full p-4">
                    {children}
                </div>
                <NavBar />
            </div>
        </div>
    )
}