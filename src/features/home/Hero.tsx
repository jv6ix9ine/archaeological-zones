import Image from 'next/image'
import { ArrowDownIcon, ArrowDownRightIcon } from '@heroicons/react/24/outline'
import PopularZones from './PopularZones'

const gridImages = [
    { url: "/hero/4.webp" },
    { url: "/hero/2.webp", span: "row-span-2" },
    { url: "/hero/3.webp" },
    { url: "/hero/5.webp" },
    { url: "/hero/6.webp", span: "row-span-2" },
    { url: "/hero/1.webp", span: "col-span-2" },
]

const Hero = () => {
    return (
        <section className='flex flex-col lg:flex-row w-full gap-6 h-screen pt-20 pb-6 px-4 lg:px-6'>
            <div className='w-full lg:w-[40%] h-full flex flex-col justify-between lg:justify-evenly items-center text-neutral-950 dark:text-neutral-50'>
                <div className="text-4xl relative w-full max-w-sm">
                    <p>Descubre lo que</p>
                    <p>México tiene</p>
                    <p>para tí</p>
                    <ArrowDownRightIcon
                        width={36}
                        height={36}
                        className=' absolute bottom-0 right-0 cursor-pointer hover:rotate-45 duration-150'
                    // onClick={scrollToSection}
                    />
                </div>
                <p className="max-w-sm">
                    Sumérgete en la rica historia y cultura de México explorando un catálogo de zonas arqueológicas impresionantes.
                </p>
                <PopularZones/>
                <button
                    className="px-8 py-2 duration-300 bg-neutral-950 dark:bg-neutral-50 hover:bg-transparent hover:ring-1 hover:ring-neutral-950 dark:hover:bg-transparent dark:hover:ring-1 dark:hover:ring-neutral-50 dark:hover:text-neutral-50 text-neutral-50 hover:text-neutral-950 dark:text-neutral-950 rounded-full  w-48"
                // onClick={scrollToSection}
                >
                    <span className="flex items-center justify-center gap-2 text-inherit">
                        Explorar
                        <ArrowDownIcon width={20} height={20} className='text-inherit' />
                    </span>
                </button>
            </div>
            <div className='grid grid-cols-3 grid-rows-3 w-[60%] gap-2  '>
                {
                    gridImages.map((item, index) => (
                        <div key={index} className={`${item.span} overflow-hidden rounded-md`}>
                            <Image
                                alt='Grid Image'
                                src={item.url}
                                height={500}
                                width={500}
                                className='h-full w-full hover:saturate-[1.25] object-cover object-center hover:scale-110 hover:cursor-pointer duration-150'
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Hero