import { IZone } from "@/src/interfaces/zone";
import ZoneModel from "@/src/server/models/zones";
import { Params } from "@/src/services/api";
import { NextRequest, NextResponse } from "next/server";

export default class ZoneController {
    static async getAll() {
        const zones = await ZoneModel.getAll()
        console.log(zones)
        return NextResponse.json(zones, { status: 200 })
    }
    static async getById(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const zoneId = query.params.id
        const state: IZone = await ZoneModel.getbyId(zoneId)
        return NextResponse.json(state, { status: 200 })
    }
    static async getByStateId(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const stateId = query.params.id
        const zones = await ZoneModel.getbyStateId(stateId)
        return NextResponse.json(zones, { status: 200 })
    }
    static async create(request: NextRequest) {
        const payload: IZone = await request.json();
        const newState: IZone = {
            ...payload
        }
        const response = await ZoneModel.create(newState)
        return NextResponse.json(response, { status: 201 })
    }
    static async createMany(request: NextRequest) {
        const payload: IZone[] = await request.json();
        const response = await ZoneModel.createMany(payload)
        return NextResponse.json(response, { status: 201 })
    }
    static async update(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const zoneId = query.params.id
        const payload = await request.json()
        const response = await ZoneModel.update(zoneId, payload)
        return NextResponse.json(response, { status: 200 })
    }
    static async delete(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const zoneId = query.params.id
        const response = await ZoneModel.delete(zoneId)
        return NextResponse.json(response, { status: 200 })
    }
}