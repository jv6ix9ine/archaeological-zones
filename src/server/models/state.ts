import { connectToDb } from '@/src/server/db'
import States from "@/src/server/schemas/state"
import Zones from "@/src/server/schemas/zone"
import { IState } from '@/src/interfaces/state'

export default class StateModel {
    static async getAll() {
        await connectToDb()
        return await States.find().populate({ path: 'zones', model: Zones }).sort({ name: 1 })
    }
    static async getbyId(id: string) {
        await connectToDb()
        return await States.findById(id).populate({ path: 'zones', model: Zones })
    }
    static async create(state: IState) {
        await connectToDb();
        const response = await new States(state);
        return await response.save()
    }
    static async createMany(state: IState[]) {
        await connectToDb();
        const response = await States.insertMany(state);
        return response
    }
    static async update(id: string, body: IState) {
        await connectToDb();
        const response = await States.findByIdAndUpdate(id, body);
        return response
    }
    static async delete(id: string) {
        await connectToDb();
        return await States.findByIdAndDelete({ _id: id });
    }
}