import { IZone } from "@/src/interfaces/zone";
import { BASE_URL, ResponseType } from "./api";

export default class ZoneService {
    static async getAll() {
        const response = await fetch(`${BASE_URL}/api/zones/`, {
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json",
            }
        });
        try {
            const zones = await response.json() as IZone[]
            return new Promise<ResponseType<IZone[]>>(resolve => resolve({
                success: true,
                data: zones,
                message: 'Zones found successfully'
            }))
        } catch (error) {
            return new Promise<ResponseType<IZone[]>>(resolve => resolve({
                success: false,
                message: (error as Error).message
            }))
        }
    }
    static async getByStateId(stateId: string) {
        const response = await fetch(`${BASE_URL}/api/states/${stateId}/zones`, {
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json",
            }
        });
        try {
            const zones = await response.json() as IZone[]
            return new Promise<ResponseType<IZone[]>>(resolve => resolve({
                success: true,
                data: zones,
                message: 'Zones found successfully'
            }))
        } catch (error) {
            return new Promise<ResponseType<IZone[]>>(resolve => resolve({
                success: false,
                message: (error as Error).message
            }))
        }
    }
    static async getById(zoneId: string) {
        const response = await fetch(`${BASE_URL}/api/zones/${zoneId}`, {
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json",
            }
        });
        try {
            const zone = await response.json() as IZone
            return new Promise<ResponseType<IZone>>(resolve => resolve({
                success: true,
                data: zone,
                message: 'Zones found successfully'
            }))
        } catch (error) {
            return new Promise<ResponseType<IZone>>(resolve => resolve({
                success: false,
                message: (error as Error).message
            }))
        }
    }
    static async createZone(zone: IZone) {
        const response = await fetch(`${BASE_URL}/api/zones/`, {
            method: "POST",
            body: JSON.stringify(zone)
        });
        try {
            const zone = await response.json() as IZone
            return new Promise<ResponseType<IZone>>(resolve => resolve({
                success: true,
                data: zone,
                message: 'Zone created successfully'
            }))
        } catch (error) {
            return new Promise<ResponseType<IZone>>(resolve => resolve({
                success: false,
                message: (error as Error).message
            }))
        }
    }
    static async updateZone(zoneId: string, body: IZone) {
        try {
            await fetch(`${BASE_URL}/api/zones/${zoneId}`, {
                method: "PATCH",
                body: JSON.stringify(body)
            })
            return new Promise<ResponseType<IZone>>(resolve => resolve({
                success: true,
                message: 'Zone updated successfully'
            }))
        } catch (error) {
            return new Promise<ResponseType<IZone>>(resolve => resolve({
                success: false,
                message: (error as Error).message
            }))
        }

    }
}