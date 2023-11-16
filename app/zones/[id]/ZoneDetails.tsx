import Slider from "@/src/common/Slider"
import { IZone } from "@/src/interfaces/zone"

type Props = {
  zone: IZone
}

const ZoneDetails = ({ zone }: Props) => {
  return (
    <div className='pt-16 h-screen container mx-auto'>
      <h1>{zone.name}</h1>
      {/* <Slider/> */}
    </div>
  )
}

export default ZoneDetails