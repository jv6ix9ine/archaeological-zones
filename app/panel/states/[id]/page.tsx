import { Params } from "@/src/services/api"

const StateConfig = ({ params }: Params) => {
    console.log(params.id)
    return (
        <div>StateConfig</div>
    )
}

export default StateConfig