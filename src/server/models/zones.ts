import { connectToDb } from '@/src/server/db'
import Zones from "@/src/server/schemas/zone"
import States from "@/src/server/schemas/state"
import { IZone } from '@/src/interfaces/zone'

export default class ZoneModel {
    static async getAll() {
        await connectToDb()
        return await Zones.find().populate({ path: 'state', model: States }).sort({ name: 1 })
    }
    static async getbyId(id: string) {
        await connectToDb()
        return await Zones.findById(id).populate({ path: 'state', model: States })
    }
    static async getbyStateId(id: string) {
        await connectToDb()
        return await Zones.find({state: id}).populate({ path: 'state', model: States })
    }
    static async create(zone: IZone) {
        await connectToDb();
        const response = await new Zones(zone);
        return await response.save()
    }
    static async createMany(zones: IZone[]) {
        await connectToDb();
        const response = await Zones.insertMany(zones);
        return response
    }
    static async update(id: string, body: IZone) {
        await connectToDb();
        const response = await Zones.findByIdAndUpdate(id, body);
        return response
    }
    static async delete(id: string) {
        await connectToDb();
        return await Zones.findByIdAndDelete({ _id: id });
    }
}