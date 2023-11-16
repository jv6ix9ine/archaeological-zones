'use client'
import Badge from "@/src/common/Badge"
import Modal from "@/src/common/Modal"
import { ArrowDownIcon, ArrowDownRightIcon, PhotoIcon } from "@heroicons/react/24/outline"
import { motion } from 'framer-motion'
import { useRef, useState } from "react"
import Image from 'next/image'
import { IState } from '@/src/interfaces/state'
import { IZone } from '@/src/interfaces/zone'
import ZoneCard from '@/src/features/zones/ZoneCard'
import Hero from "@/src/features/home/Hero"
import Gallery from "@/src/features/home/Gallery"

type Props = {
    states: IState[],
}

const HomePage = ({ states }: Props) => {

    const galleyRef = useRef<HTMLDivElement>(null)

    const scrollToSection = () => {
        const section = galleyRef.current
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', });
        }
    };

    return (
        <>
            <Hero />
            <Gallery states={states} />
        </>
    )
}

export default HomePage