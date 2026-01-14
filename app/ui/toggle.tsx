'use client';

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Toggle({className} : {className?: string}) {

    const [mounted, setMounted] = useState(false)
    const [dark, setDark] = useState(() => {
        if (typeof window !== undefined ) return;
        return localStorage.getItem('theme') === 'dark'
    });

    useEffect(() => {
        setMounted(true);
        const theme = localStorage.getItem('theme') === 'dark';
        setDark(theme);
    },[])

    useEffect(() => {
        if(!mounted) return
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', dark)
    },[mounted, dark])


    return (
        <div>
            <MdDarkMode onClick={() => setDark(true)}
                className={clsx("w-10 h-10 text-sky-700 active:scale-90 transition-transform duration-100", dark && 'hidden' )} />
            <MdLightMode onClick={() => setDark(false)}
                className={clsx("w-10 h-10 text-yellow-400 active:scale-90 transition-transform duration-100", !dark && 'hidden')} />
        </div>
    )
}