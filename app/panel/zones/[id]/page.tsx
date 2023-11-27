import ZoneForm from "@/src/features/zones/ZoneForm"
import ZoneController from "@/src/server/controller/zones"
import { Params } from "@/src/services/api"
import { NextRequest } from "next/server"

const ZoneConfig = async ({ params }: Params) => {
    const zoneRequest = await ZoneController.getById({} as NextRequest, { params })
    const zone = await zoneRequest.json()
    return (
        <div className="pt-16 container mx-auto">
            <ZoneForm zone={zone ?? []} />
        </div>
    )
}

export default ZoneConfig