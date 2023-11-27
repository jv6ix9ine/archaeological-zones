import StateController from "@/src/server/controller/state"
import StatePanelPage from "./StatePanelPage"

const StatesPanel = async () => {
  const statesRequest = await StateController.getAll()
  const states = await statesRequest.json()
  return (
    <div className='pt-16 container mx-auto'>
      <StatePanelPage states={states ?? []} />
    </div>
  )
}

export default StatesPanel