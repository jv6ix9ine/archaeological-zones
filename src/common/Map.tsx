'use client'
import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader';

type Choords = {
    latitude: number,
    longitude: number,
}

type Props = {
    choords?: Choords
    zoom?: number
}

const Map = ({ choords, zoom }: Props) => {
    const mapHome = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: String(process.env.NEXT_PUBLIC_MAPS_API_KEY),
                version: "weekly"
            })
            const { Map } = await loader.importLibrary('maps')
            const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary
            const map = new Map(mapHome.current as HTMLDivElement, {
                center: {
                    lat: choords?.latitude ?? 24.7917594,
                    lng: choords?.longitude ?? -103.2680313
                },
                zoom: zoom ?? 5.6,    
            })
            const marker = new Marker({
                map,
                position: {
                    lat: choords?.latitude ?? 0,
                    lng: choords?.longitude ?? 0
                }
            })
        }
        initMap()
    }, [choords?.latitude, choords?.longitude, zoom])
    return (
        <div ref={mapHome} className='h-full w-full'></div>
    )
}

export default Map