'use client'
import { IState } from '@/src/interfaces/state'
import { IZone } from '@/src/interfaces/zone'
import ZoneService from '@/src/services/zones'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
type Props = {
    state: IState
    setOpen: Dispatch<SetStateAction<boolean>>
}

const StateContent = ({ state, setOpen }: Props) => {

    const [zones, setZones] = useState<IZone[]>([])
    const router = useRouter()

    useEffect(() => {
        ZoneService.getByStateId(state._id ?? "").then((response) => {
            if (response.data) {
                setZones(response.data)

            }
        })
    }, [state, zones])

    function handleSelected(zoneId: string){
        setOpen(false)
        router.push(`zones/${zoneId}`)
    }


    return (
        <div className='w-full flex flex-col h-[90vh]'>
            <Image src={`${state?.imageUrl}`}
                alt='image'
                height={800} width={800}
                className='w-full h-64 lg:h-72 object-cover object-center saturate-[1.4]'
            />
            <motion.div
                className='p-4'
                initial={{ opacity: 0, y: '-30%' }}
                exit={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
            >
                <h1 className='text-2xl font-medium'>{state?.name}</h1>
                <h2 className='text-lg'>{state?.capital}</h2>
                <hr className='my-4 border-neutral-400' />
                <h1 className='text-xl font-medium'>Zonas arqueológicas:</h1>
            </motion.div>
            <motion.div className='md:columns-2 lg:columns-3 gap-4 space-y-4 p-4'
                initial={{ opacity: 0, y: '-30%' }}
                exit={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.35 }}
            >
                {
                    // zones.length > 0 ?
                    zones.map((zone, index) => (
                        <div key={index} className={`relative overflow-hidden rounded-md break-inside-auto`} onClick={() => handleSelected(zone._id)} >
                            <Image
                                alt='Grid Image'
                                src={zone.mainImageUrl ?? ""}
                                height={500}
                                width={500}
                                className='h-full w-full hover:saturate-[1.25] object-cover object-center hover:scale-110 hover:cursor-pointer duration-150'
                            />
                            <span className='absolute z-20 bottom-4 left-4 text-2xl text-neutral-50 font-medium'>
                                {zone.name}
                            </span>
                        </div>
                    ))

                }
            </motion.div>
        </div>
    )
}

export default StateContent