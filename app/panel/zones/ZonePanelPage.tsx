'use client'
import { IState } from "@/src/interfaces/state"
import { IZone } from "@/src/interfaces/zone"
import ZoneService from "@/src/services/zones"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
    zones: IZone[]
}

const ZonePanelPage = ({ zones }: Props) => {
    const router = useRouter()
    const handleDelete = async(zoneId: string) => {
        await ZoneService.deleteZone(zoneId)
        router.refresh()
    }
    return (
        <div className="flex flex-col gap-2">
            <button className="hover:bg-neutral-400 p-2" onClick={() => router.push(`/panel/zones/create`)}>Agregar zona</button>
            {
                zones.map((zone) => (
                    <div key={zone._id} className="py-2 flex justify-between w-full hover:bg-neutral-500">
                        <span>{zone.name}</span>
                        <div className="flex gap-4">
                            <Link href={`/panel/zones/${zone._id}`}>
                                <PencilSquareIcon width={24} height={24} />
                            </Link>
                            <TrashIcon width={24} height={24} className="cursor-pointer" onClick={() => handleDelete(zone._id ?? "")} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ZonePanelPage