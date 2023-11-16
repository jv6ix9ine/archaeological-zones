import { IState } from "@/src/interfaces/state";
import { IZone } from "@/src/interfaces/zone";
import StateModel from "@/src/server/models/state";
import { Params } from "@/src/services/api";
import { NextRequest, NextResponse } from "next/server";
import ZoneModel from "../models/zones";

export default class StateController {
    static async getAll() {
        const states = await StateModel.getAll()
        return NextResponse.json(states, { status: 200 })
    }
    static async getById(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const stateId = query.params.id
        const state: IState = await StateModel.getbyId(stateId)
        return NextResponse.json(state, { status: 200 })
    }
    static async create(request: NextRequest) {
        const payload: IState = await request.json();
        const newState: IState = {
            ...payload
        }
        const response = await StateModel.create(newState)
        return NextResponse.json(response, { status: 201 })
    }
    static async createMany(request: NextRequest) {
        const payload: IState[] = await request.json();
        const response = await StateModel.createMany(payload)
        return NextResponse.json(response, { status: 201 })
    }
    static async update(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const stateId = query.params.id
        const payload = await request.json()
        const response = await StateModel.update(stateId, payload)
        return NextResponse.json(response, { status: 200 })
    }
    static async delete(request: NextRequest, query: Params) {
        if (query.params?.id === undefined)
            return NextResponse.json("No valid identifier provided", { status: 418 });
        const stateId = query.params.id
        const response = await StateModel.delete(stateId)
        return NextResponse.json(response, { status: 200 })
    }
}