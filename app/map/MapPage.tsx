// 'use client'
import Map from '@/src/common/Map'
import { IZone } from '@/src/interfaces/zone'
import ZoneController from '@/src/server/controller/zones'

const MapPage = async () => {
  const zonesRequest = await ZoneController.getAll()
  const zones: IZone[] = await zonesRequest.json()
  return (
    <div className='pt-14 h-screen'>
      <Map zones={zones ?? []} />
    </div>
  )
}

export default MapPage