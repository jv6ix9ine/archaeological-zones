import ZoneController from '@/src/server/controller/zones'
import StateController from '@/src/server/controller/state'
import Link from 'next/link'

const Panel = async () => {
    // const zonesRequest = await ZoneController.getAll()
    // const zones = await zonesRequest.json()
    // const statesRequest = await StateController.getAll()
    // const states = await statesRequest.json()
    return (
        <div className="container mx-auto pt-14">
            <div className="p-4">
                <Link href={`panel/zones`}> Zonas arqueológicas </Link>
            </div>
            <div className="p-4">
                <Link href={`panel/states`}> Estados </Link>
            </div>
        </div>
    )
}

export default Panel