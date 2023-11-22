'use client'
import { RefObject, useRef, useState } from 'react'
import Modal from '@/src/common/Modal'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IState } from '@/src/interfaces/state'
import { IZone } from '@/src/interfaces/zone'
import StateContent from '@/src/features/states/StateContent'
import Link from 'next/link'

type Props = {
    ref?: RefObject<HTMLDivElement>
    states: IState[]
}

const Gallery = ({ states, ref }: Props) => {
    console.log(ref?.current)
    const [modal, setModal] = useState(false)
    const [selectedState, setSelectedState] = useState<IState>()
    const [currentZones, setCurrentZones] = useState<IZone[] | undefined>(undefined)
    const galleyRef = useRef(null)

    const handleSelectedState = (state: IState) => {
        setSelectedState(state)
        setModal(!modal)
    }

    const modalVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <section className="py-16 px-4 lg:px-6 max-w-7xl mx-auto text-neutral-950 dark:text-neutral-50" id='zones'>
                <div className='py-8'>
                    <h1 className="text-3xl md:text-4xl">Zonas arqueológicas</h1>
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {
                        states.map((state, index) => (
                            <div key={index} className={`relative overflow-hidden rounded-md`} onClick={()=>handleSelectedState(state)}>
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
                            </div>
                        ))
                    }
                </div>
            </section>
            <Modal open={modal} setOpen={setModal}>
                <StateContent state={selectedState ?? {} as IState} setOpen={setModal} />
            </Modal>
            {/* <Link href={"/#gallery"}>
                    <button>
                        ir a galeria
                    </button>
            </Link> */}
        </>

    )
}

export default Gallery