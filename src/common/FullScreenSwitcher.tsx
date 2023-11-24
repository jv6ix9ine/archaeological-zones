'use client'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';

const FullScreenSwitcher = () => {

    const [fullScreen, setFullScreen] = useState(false)
    const isFullScreen = () => {
        return document.fullscreenElement !== null;
    };
    const handleFullScreen = () => {
        const html: HTMLElement = document.getElementById('root')!
        if (!isFullScreen()) {
            html.requestFullscreen().then(() => {
                setFullScreen(!fullScreen)
            })
        }
        document.exitFullscreen()
    }



    useEffect(() => {

        document.addEventListener('fullscreenchange', () => {
            setFullScreen((isFullScreen()))
        });

        return () => document.removeEventListener('fullscreenchange', () => {
            setFullScreen((isFullScreen()))
        });
    }, []);
    return (
        <button
            onClick={handleFullScreen}
            className='p-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:scale-105 active:scale-95 duration-200'
        >
            <ArrowsPointingOutIcon width={24} height={24} className='text-neutral-950 dark:text-neutral-50' />
        </button>
    )
}

export default FullScreenSwitcher