import { IState } from "@/src/interfaces/state"
import { IZone } from "@/src/interfaces/zone"
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type Props = {
    zones: IZone[]
}

const ZonePanelPage = ({ zones }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            {
                zones.map((zone) => (
                    <div key={zone._id} className="py-2 flex justify-between w-full hover:bg-neutral-500">
                        <span>{zone.name}</span>
                        <div className="flex gap-4">
                            <Link href={`/panel/zones/${zone._id}`}>
                                <PencilSquareIcon width={24} height={24} />
                            </Link>
                            <TrashIcon width={24} height={24} className="cursor-pointer" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ZonePanelPage