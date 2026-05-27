import ZoneController from "@/src/server/controller/zones";
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest, context: { params: Promise<{ id: string }> }) => {
	const params = await context.params
	return ZoneController.getByStateId(request, { params })
}
