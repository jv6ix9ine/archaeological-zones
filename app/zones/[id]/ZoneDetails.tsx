import Map from "@/src/common/Map"
import { IZone } from "@/src/interfaces/zone"
import Image from 'next/image'

type Props = {
  zone: IZone
}

const ZoneDetails = ({ zone }: Props) => {
  console.log(zone)

  return (
    <div className='pt-16 container max-w-2xl mx-auto p-4'>
      <div className="pt-2">
        <h1 className="text-3xl font-semibold mb-4">{zone.name}</h1>
        <Image src={zone.mainImageUrl ?? ""} alt={zone.name} className="w-full object-cover object-center mb-4 rounded-md hover:saturate-[1.25] h-72" width={1000} height={1000} />
        <p className="mt-4"><span className="font-semibold">Ubicación:</span> {zone.location}</p>
        <p><span className="font-semibold">Horarios:</span> {zone.schedules}</p>
        <p className="mt-4">
          <span className="font-semibold">Estado: </span>{zone.state.name ?? ""} - <span className="font-semibold">Capital:</span> {zone.state.capital}
        </p>
        <p className="mt-4">{zone.description}</p>
        <div className="my-4 md:columns-2 space-y-4 py-4 gap-4">
          {
            zone.images?.map((item, index) => (
              <div key={index} className={`overflow-hidden rounded-md break-inside-auto`}>
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
      </div>
      <h1 className="text-2xl">Ubicación en el mapa</h1>
      <div className="w-full h-96 py-4 rounded-lg overflow-hidden">
        <Map choords={zone.choords} zoom={8} />
      </div>
    </div>
  )
}

export default ZoneDetails