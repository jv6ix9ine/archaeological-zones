import { IZone } from "./zone"

export interface IState {
    _id?: string
    abbreviation?: string
    capital?: string
    createdAt?: Date
    imageUrl?: string
    name: string
    updatedAt?: Date
    zones?: IZone[]
}