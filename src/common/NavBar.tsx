'use client'
import { MapIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Bars3BottomRightIcon, HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

const NavBar = () => {
    const router = useRouter()
    return (
        <nav className='fixed top-0 shadow-md h-14 w-full z-40 px-4 lg:px-6 bg-neutral-100 dark:bg-neutral-950 duration-300 dark:shadow-md dark:shadow-neutral-50/5'>
            <div className='h-full flex items-center justify-between'>
                <button
                    onClick={() => router.push("/#home", { scroll: true})}
                    className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 duration-200'
                >
                    <HomeIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
                </button>
                <div className='flex gap-4'>
                    <ThemeSwitcher />
                    <button
                        onClick={() => router.push("/zones")}
                        className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 duration-200 uration-300'
                    >
                        <MapPinIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
                    </button>
                    <button
                        onClick={() => router.push("/map")}
                        className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 duration-200 uration-300'
                    >
                        <MapIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar