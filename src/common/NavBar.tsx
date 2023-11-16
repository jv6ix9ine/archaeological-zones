'use client'
import { MapIcon } from '@heroicons/react/24/outline'
import { Bars3BottomRightIcon, HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

const NavBar = () => {
    const router = useRouter()
    return (
        <nav className='fixed top-0 shadow-md h-14 w-full z-50 px-4 lg:px-6 bg-neutral-100 dark:bg-neutral-950 duration-300'>
            <div className='h-full flex items-center justify-between'>
                <button onClick={() => router.push("/home")} className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 duration-300'>
                    <HomeIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
                </button>
                <div className='flex gap-4'>
                    <ThemeSwitcher/>
                    <button onClick={() => router.push("/map")} className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 duration-300'>
                        <MapIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50'/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar