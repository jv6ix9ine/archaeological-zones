import Map from "@/src/common/Map"
import Slider from "@/src/common/Slider"
import { IZone } from "@/src/interfaces/zone"
import Image from 'next/image'

type Props = {
  zone: IZone
}

const ZoneDetails = ({ zone }: Props) => {
  return (
    <div className='pt-16 h-screen container max-w-2xl mx-auto p-4'>
      <div className="pt-2">
        <h1 className="text-3xl font-semibold mb-4">{zone.name}</h1>
        <Image src={zone.mainImageUrl ?? ""} alt={zone.name} className="w-full object-cover object-center mb-4 rounded-md hover:saturate-[1.25] h-60" width={1000} height={1000} />
        <p className="mt-4"><span className="font-semibold">Ubicación:</span> {zone.location}</p>
        <p><span className="font-semibold">Horarios:</span> {zone.schedules}</p>
        <p className="mt-4">
          <span className="font-semibold">Estado: </span>{zone.state.name} - <span className="font-semibold">Capital:</span> {zone.state.capital}
        </p>
        <p className="mt-4">{zone.description}</p>
        <div className="my-4 grid grid-cols-3">
          {
            zone.images?.map((item, index) => (
              <div key={index} className={`overflow-hidden rounded-md`}>
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
        <Map choords={zone.choords} zoom={7} />
      </div>
    </div>
  )
}

export default ZoneDetails