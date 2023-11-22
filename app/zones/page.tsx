import ZonesPage from './ZonesPage'
import ZoneController from '@/src/server/controller/zones'

const Zones = async() => {
  const zonesRequest = await ZoneController.getAll()
  const zones = await zonesRequest.json()
  return (
    <ZonesPage zones={zones ?? []}/>
  )
}

export default Zones