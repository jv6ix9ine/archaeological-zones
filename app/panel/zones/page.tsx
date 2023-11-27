import ZoneController from "@/src/server/controller/zones"
import ZonePanelPage from "./ZonePanelPage"

const ZonesPanel = async () => {
  const zonesRequest = await ZoneController.getAll()
  const zones = await zonesRequest.json()
  return (
    <div className='pt-16 container mx-auto'>
      <ZonePanelPage zones={zones ?? []} />
    </div>
  )
}

export default ZonesPanel