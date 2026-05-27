import ZoneController from "@/src/server/controller/zones"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return ZoneController.getById(request, { params })
}

export const DELETE = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return ZoneController.delete(request, { params })
}

export const PATCH = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return ZoneController.update(request, { params })
}