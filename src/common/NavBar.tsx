'use client'
import { MapIcon } from '@heroicons/react/24/outline'
import { Bars3BottomRightIcon, HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const router = useRouter()
    return (
        <nav className='fixed top-0 shadow-sm h-14 w-full z-10 px-4 bg-stone-50'>
            <div className='container mx-auto h-full flex items-center justify-between'>
                <button onClick={() => router.push("/home")}>
                    <HomeIcon width={24} height={24} className='text-stone-900' />
                </button>
                <div className='flex gap-6'>
                    <button>
                        <MagnifyingGlassIcon width={24} height={24} className='text-stone-900' />
                    </button>
                    <button onClick={() => router.push("/map")}>
                        <MapIcon width={24} height={24} className='text-stone-900'/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar