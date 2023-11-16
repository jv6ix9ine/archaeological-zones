"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    };

    return (
        <>
            {
                theme === 'light' ?
                    <button className='p-2 rounded-lg hover:bg-neutral-300 duration-300' onClick={() => setTheme('dark')}>
                        <MoonIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
                    </button>
                    :
                    <button className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 duration-300' onClick={() => setTheme('light')}>
                        <SunIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
                    </button>
            }
        </>
    );
}

export default ThemeSwitcher