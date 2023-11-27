import { IState } from "@/src/interfaces/state"
import { IZone } from "@/src/interfaces/zone"
import Link from "next/link"

type Props = {
  states: IState[]
}

const StatePanelPage = ({ states }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {
        states.map((state) => (
          <div key={state._id}>
            <Link href={`/panel/states/${state._id}`}>{state.name}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default StatePanelPage