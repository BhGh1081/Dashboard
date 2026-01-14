'use client'

import Image from "next/image";
import { poppins } from "../ui/font";
import Link from "next/link";
import Toggle from "../ui/toggle";
import { BiSolidUserCircle } from "react-icons/bi";
import { useState } from "react";
import clsx from "clsx";


export default function TopBar() {

    const [profile, setProfile] = useState(false);

    return (
        <div className="relative h-[80px] w-full flex items-center justify-between p-2 shadow-sm shadow-black/20">
            <div className="flex items-center">
                <Image src={'dashboard_icon.svg'} alt="Dashboard Icon" width={60} height={60} />
                <strong className={`${poppins.className} font-poppins text-[1.5rem] font-extrabold`}>Dashboard</strong>
            </div>
            <div className="relative">
                <BiSolidUserCircle onClick={() => setProfile(!profile)} className="w-15 h-15" />
                <div
                    onMouseLeave={() => setProfile(false)}
                    className={clsx("bg-modal shadow-md w-50 absolute space-y-6 justify-start px-6 rounded top-15 right-0 transition-all duation-500 ease-in-out", !profile ? 'h-0' : 'h-45 py-2')}>
                    {profile &&
                        <>
                            <div className="border-b-solid border-b-1 border-b-gray-300 py-4">
                                <p>Petter John</p>
                                <p className="text-[.8rem] text-gray-400">Admin</p>
                            </div>
                        </>
                    }
                </div>
            </div>
            <div className="absolute right-25 top-1/2 -translate-y-1/2">
                <Toggle />
            </div>
        </div>
    )
}