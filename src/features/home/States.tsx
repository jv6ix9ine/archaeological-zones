'use client'
import { RefObject, useState } from 'react'
import Modal from '@/src/common/Modal'
import Image from 'next/image'
import { IState } from '@/src/interfaces/state'
import StateContent from '@/src/features/states/StateContent'
import { useFilter } from '@/src/hooks/useFilter'
import { FaceFrownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    ref?: RefObject<HTMLDivElement>
    states: IState[]
}

const States = ({ states, ref }: Props) => {

    const { handleChange, filteredData } = useFilter(states)

    const [modal, setModal] = useState(false)
    const [selectedState, setSelectedState] = useState<IState>()

    const handleSelectedState = (state: IState) => {
        setSelectedState(state)
        setModal(!modal)
    }

    return (
        <>
            <section className="py-16 px-4 lg:px-6 max-w-7xl mx-auto text-neutral-950 dark:text-neutral-50" id='zones'>
                <h1 className="text-4xl mt-4">Estados de la República Mexicana</h1>
                <div className='my-6 lg:flex' >
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
                </div>
                {
                    filteredData.length > 0 ?
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                            <AnimatePresence mode='sync'>
                                {
                                    filteredData.map((state) => (
                                        <motion.div
                                            layout
                                            key={state._id}
                                            initial={{ opacity: 0, x: 1 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, type: "spring" }}
                                            className={`relative overflow-hidden rounded-md`}
                                            onClick={() => handleSelectedState(state)}
                                        >
                                            <div className='absolute z-10 h-14 w-full bg-gradient-to-b from-transparent to-neutral-800 opacity-80 bottom-0'></div>
                                            <Image
                                                alt={`Imagen de ${state.name}`}
                                                src={state.imageUrl ?? ""}
                                                height={500}
                                                width={500}
                                                className='h-64 w-full saturate-[1.4] object-cover object-center hover:scale-110 hover:cursor-pointer duration-150'
                                            />
                                            <span className='absolute z-20 bottom-4 left-4 text-2xl text-neutral-50 font-medium'>
                                                {state.name}
                                            </span>
                                        </motion.div>
                                    ))
                                }
                            </AnimatePresence>
                        </div>
                        :
                        <AnimatePresence mode="sync">
                            <motion.div className="h-[32rem] w-full container flex items-center justify-center"
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
            <Modal open={modal} setOpen={setModal}>
                <StateContent state={selectedState ?? {} as IState} setOpen={setModal} />
            </Modal>
        </>

    )
}

export default States