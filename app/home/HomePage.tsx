'use client'
import { useRef, useState } from "react"
import { IState } from '@/src/interfaces/state'
import Hero from "@/src/features/home/Hero"
import Gallery from "@/src/features/home/Gallery"
import Image from "next/image"

type Props = {
    states: IState[],
}

const HomePage = ({ states }: Props) => {

    return (
        <>
            {/* <Image height={500} width={500} alt="Some image" src={'https://lugares.inah.gob.mx/images/zonas/portadas/_thumb1/4_Zona_Arqueologica_de_Bonampak,_Chiapas_Foto_Mauricio_Marat_INAH_1.jpg'}></Image> */}
            <Hero />
            <Gallery states={states} />
        </>
    )
}

export default HomePage