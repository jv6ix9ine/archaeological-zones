'use client'
import { useRef, useState } from "react"
import { IState } from '@/src/interfaces/state'
import Hero from "@/src/features/home/Hero"
import Gallery from "@/src/features/home/Gallery"

type Props = {
    states: IState[],
}

const HomePage = ({ states }: Props) => {

    return (
        <>
                <Hero />
                <Gallery states={states} />
        </>
    )
}

export default HomePage