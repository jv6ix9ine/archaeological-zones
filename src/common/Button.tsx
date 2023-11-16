import { ArrowDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
type Props = {
    className?: string
}

const Button = ({className}:Props) => {
    return (
        <button
            className={`${className} w-48 px-8 py-2 rounded-full duration-300 bg-neutral-950 dark:bg-neutral-50 hover:bg-transparent hover:ring-1 hover:ring-neutral-950 dark:hover:bg-transparent dark:hover:ring-1 dark:hover:ring-neutral-50 dark:hover:text-neutral-50 text-neutral-50 hover:text-neutral-950 dark:text-neutral-950  `}
        // onClick={scrollToSection}
        >
            <span className="flex items-center justify-center gap-2 text-inherit">
                Explorar
                <ArrowDownIcon width={20} height={20} className='text-inherit' />
            </span>
        </button>
    )
}

export default Button