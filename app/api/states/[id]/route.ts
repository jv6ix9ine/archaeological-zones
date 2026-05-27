import StateController from "@/src/server/controller/state"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return StateController.getById(request, { params })
}

export const DELETE = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return StateController.delete(request, { params })
}

export const PATCH = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return StateController.update(request, { params })
}