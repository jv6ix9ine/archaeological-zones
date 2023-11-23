import { IZone } from "@/src/interfaces/zone"
import Image from 'next/image'
import Link from "next/link"

type Props = {
    zones: IZone[]
}
const ZonesPage = ({ zones }: Props) => {

    return (
        <section className="pt-16 container mx-auto">
            <div className='py-4'>
                <h1 className="text-3xl md:text-4xl">Zonas arqueológicas</h1>
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 py-4">
                {
                    zones.map((zone, index) => (
                        <Link key={index} href={`/zones/${zone._id}`}>
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
                    ))
                }
            </div>
        </section>
    )
}

export default ZonesPage