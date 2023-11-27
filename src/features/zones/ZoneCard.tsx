import { IZone } from '../../interfaces/zone'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

type Props = {
    zone: IZone
}

const ZoneCard = ({ zone }: Props) => {
    const router = useRouter()
    return (
        <div className='w-full p-4 hover:ring-1 rounded-md ring-stone-300 hover:shadow-lg cursor-pointer duration-150  grid lg:grid-cols-2 gap-4'>
            <Image src={zone.mainImageUrl ?? ""} alt={`${zone.name} photo`} height={500} width={500} className='w-full h-56 object-cover object-center' />
            <div className='h-full flex flex-col justify-between items-start gap-2' >
                <h1 className='text-2xl font-medium'>{zone.name}</h1>
                <p>Ubicacion: {zone.location}</p>
                <p>Horarios: {zone.schedules}</p>
                <button className='rounded-md px-4 py-2 ring-1 ring-stone-700 hover:bg-stone-300 hover:shadow-md' onClick={()=>router.push(`/zones/${zone._id}`)}>
                    <span className='flex items-center justify-between gap-2'>
                        Más información
                        <ArrowRightIcon height={20} width={20} className='text-stone-800' />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ZoneCard