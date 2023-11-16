'use client'
import { IState } from '@/src/interfaces/state'
import { IZone } from '@/src/interfaces/zone'
import ZoneService from '@/src/services/zones'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ZoneCard from '../zones/ZoneCard'

type Props = {
    state: IState
}

const StateContent = ({ state }: Props) => {

    const [zones, setZones] = useState<IZone[]>([])

    useEffect(() => {
        ZoneService.getByStateId(state._id ?? "").then((response) => {
            if(response.data){
                setZones(response.data)
            }
        })
    }, [state])
    
    return (
        <div className='w-full flex flex-col'>
            <Image src={`${state?.imageUrl}`}
                alt='image'
                height={800} width={800}
                className='w-full h-64 lg:h-96 object-cover object-center'
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
                <hr className='my-4 border-stone-400' />
                <h1 className='text-xl font-medium mb-4'>Zonas arqueológicas:</h1>
                <div className='grid lg:grid-cols-2'>
                    {
                        zones?.length !== 0 ?
                            zones?.map((zone) => (
                                <ZoneCard key={zone._id} zone={zone} />
                            ))
                            :
                            <div>Sin Zonas Arqueológicas</div>
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default StateContent