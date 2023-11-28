import { IState } from "./state"

export interface IZone {
    _id?: string
    choords: IChoords
    createdAt?: Date
    description: string
    images?: IImage[]
    location: string
    mainImageUrl?: string
    name: string
    schedules: string
    state?: string
    updatedAt?: Date
}

interface IChoords {
    latitude: number
    longitude: number
}

interface IImage {
    url: string
}

export interface IZoneForm {
    choords: IChoords
    description: string
    location: string
    mainImageUrl?: string
    imageUrl1?: string
    imageUrl2?: string
    imageUrl3?: string
    name: string
    schedules: string
    state?: string
}

export const DEFAULT_ZONE: IZoneForm = {
    choords: { latitude: 0, longitude: 0 },
    description: "",
    location: "",
    name: "",
    schedules: "",
    state: "",
    mainImageUrl: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
}