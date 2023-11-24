import { IState } from '@/src/interfaces/state'
import Hero from "@/src/features/home/Hero"
import States from "@/src/features/home/States"

type Props = {
    states: IState[],
}

const HomePage = ({ states }: Props) => {

    return (
        <>
            <Hero />
            <States states={states} />
        </>
    )
}

export default HomePage