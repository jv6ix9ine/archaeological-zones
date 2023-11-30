'use client'
import { useFilter } from "@/src/hooks/useFilter"
import { IZone } from "@/src/interfaces/zone"
import { FaceFrownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"
import Image from 'next/image'
import Link from "next/link"

type Props = {
    zones: IZone[]
}
const ZonesPage = ({ zones }: Props) => {
    const { handleChange, filteredData } = useFilter(zones)
    return (
        <section className="w-full max-w-7xl pt-16 p-4 lg:px-6 container mx-auto">
            {/* <div className='py-4'>
                <h1 className="text-4xl">Zonas arqueológicas</h1>
            </div>
            <div className='my-4 lg:flex' >
                <div className="relative w-full max-w-lg">
                    <input
                        autoComplete={'false'}
                        type="text"
                        placeholder="Busqueda rapida..."
                        className="w-full rounded-lg duration-200 border-neutral-200 bg-neutral-200 dark:bg-neutral-800 pe-4 shadow-sm h-11 pl-10 text-neutral-900 dark:text-neutral-50"
                        onChange={handleChange}
                    />
                    <span className='pointer-events-none duration-200 absolute inset-y-0 start-0 grid w-10 place-content-center text-inherit'>
                        <MagnifyingGlassIcon width={20} height={20} className='' />
                    </span>
                </div>
            </div> */}
            <div className='w-full flex flex-col items-center'>
                <h1 className="text-4xl mt-4">Zonas arqueológicas</h1>
                <div className='my-6 md:flex justify-center w-full' >
                    <div className="relative w-full max-w-xl">
                        <input
                            autoComplete={'false'}
                            type="text"
                            placeholder="Busqueda rápida..."
                            className="w-full rounded-lg duration-200 border-neutral-200 bg-neutral-200 dark:bg-neutral-800 pe-4 shadow-sm h-11 pl-10 text-neutral-900 dark:text-neutral-50"
                            onChange={handleChange}
                        />
                        <span className='pointer-events-none duration-200 absolute inset-y-0 start-0 grid w-10 place-content-center text-inherit'>
                            <MagnifyingGlassIcon width={20} height={20} />
                        </span>
                    </div>
                </div>
            </div>
            {
                filteredData.length > 0 ?
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 py-4">
                        <AnimatePresence mode="sync">
                            {
                                filteredData.map((zone) => (
                                    <motion.div
                                        layout
                                        key={zone._id}
                                        initial={{ opacity: 0, x: 1 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, type: "spring" }}
                                    >
                                        <Link href={`/zones/${zone._id}`}>
                                            <div className={`relative overflow-hidden rounded-md`}>
                                                <div className='absolute z-10 h-14 w-full bg-gradient-to-b from-transparent to-neutral-800 opacity-80 bottom-0'></div>
                                                <Image
                                                    alt={`Imagen de ${zone.name}`}
                                                    src={zone.mainImageUrl ?? ""}
                                                    height={500}
                                                    width={500}
                                                    className='h-64 w-full saturate-[1.4] object-cover object-center hover:scale-110 hover:cursor-pointer duration-150'
                                                />
                                                <span className='absolute z-20 bottom-4 left-4 text-2xl text-neutral-50 font-medium'>
                                                    {zone.name}
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            }
                        </AnimatePresence>
                    </div>
                    :
                    <AnimatePresence mode="sync">
                        <motion.div className="h-[30rem] w-full container flex items-center justify-center"
                            layout
                            initial={{ opacity: 0, y: "40%" }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, type: "spring" }}
                        >
                            <div className="text-xl font-medium flex items-center gap-2">
                                No se encontraron coincidencias... <FaceFrownIcon width={24} height={24} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
            }

        </section>
    )
}

export default ZonesPage