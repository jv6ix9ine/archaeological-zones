import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import FullScreenSwitcher from './FullScreenSwitcher'

const Footer = () => {
    return (
        <footer className='w-full p-4 border-t border-neutral-400 text-neutral-900 dark:text-neutral-200'>
            <div className='container mx-auto h-full flex flex-col justify-between gap-6'>
                <div className='flex justify-between items-center'>
                    <p>Zonas Arqueológicas de México &copy; 2023</p>
                    <div>
                        <ThemeSwitcher />
                        {/* <FullScreenSwitcher /> */}
                    </div>
                </div>
                <div>
                    <ul className='grid grid-cols-2 gap-4 md:flex md:gap-8'>
                        <li><Link href={`/#home`} className='hover:underline'>Inicio</Link></li>
                        <li><Link href={`/zones`} className='hover:underline'>Zonas Arqueológicas</Link></li>
                        <li><Link href={`/map`} className='hover:underline'>Mapa</Link></li>
                        {/* <li><Link href={`/states`} className='hover:underline'>Estados</Link></li> */}
                    </ul>
                </div>
                <div className='flex gap-4 items-center'>
                    <AcademicCapIcon width={20} height={20} className='text-neutral-900 dark:text-neutral-50 ' />
                    <p className='uppercase'>IDYGS-73 | Noemi, German, Gabriel, Donovan & Joath.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer