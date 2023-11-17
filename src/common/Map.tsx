'use client'
import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader';

type Props = {
    choords?: {
        latitude: number,
        longitude: number,
    },
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
                    lat: choords?.latitude ?? 0,
                    lng: choords?.longitude ?? 0
                },
                zoom: zoom,
            })
            const marker = new Marker({
                map,
                position: {
                    lat: choords?.latitude ?? 0,
                    lng: choords?.longitude ?? 0
                }
            })
            // const marker2 = new Marker({
            //     map,
            //     position: {
            //         lat: 20.1451481,
            //         lng: -89.9257975
            //     }
            // })
        }
        initMap()
    }, [])
    return (
        <div ref={mapHome} className='h-full w-full'></div>
    )
}

export default Map