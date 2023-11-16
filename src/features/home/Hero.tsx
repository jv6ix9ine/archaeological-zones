import Image from 'next/image'
import { ArrowDownIcon, ArrowDownRightIcon } from '@heroicons/react/24/outline'
import PopularZones from './PopularZones'
import Button from '@/src/common/Button'

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
        <section className='w-full h-screen flex flex-col lg:flex-row gap-6 pt-20 lg:px-6'>
            <div className='w-full lg:w-[40%] h-[50%] lg:h-full flex flex-col justify-between lg:justify-evenly items-center px-4 text-neutral-950 dark:text-neutral-50'>
                <div className="text-4xl relative w-full max-w-xs md:max-w-md">
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
                <p className="max-w-xs md:max-w-md">
                    Sumérgete en la rica historia y cultura de México explorando un catálogo de zonas arqueológicas impresionantes.
                </p>
                <PopularZones />
                <Button className='hidden md:block' />
            </div>
            <div className='hidden h-[50%] lg:h-full md:grid grid-cols-3 grid-rows-3 lg:w-[60%] gap-2'>
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
            <div className='h-[50%] w-full md:hidden  overflow-hidden'>
                <Image
                    alt='Grid Image'
                    src={gridImages[0].url}
                    height={500}
                    width={500}
                    className='h-full w-full hover:saturate-[1.25] object-cover object-center hover:scale-110 hover:cursor-pointer duration-150'
                />
                <div className='w-full flex justify-center relative'>
                    <Button className="absolute bottom-4 z-10" />
                </div>
            </div>
        </section>
    )
}

export default Hero