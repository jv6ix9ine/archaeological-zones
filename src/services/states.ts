import { IState } from "@/src/interfaces/state";
import { BASE_URL, ResponseType } from "./api";

export default class StateService {
    static async getAll() {
        const response = await fetch(`${BASE_URL}/api/states/`, {
            cache: 'no-cache',
            headers: {
                "Content-Type": "application/json",
            }
        });
        try {
            const states = await response.json() as IState[]
            return new Promise<ResponseType<IState[]>>(resolve => resolve({
                success: true,
                data: states,
                message: 'States found successfully'
            }))
        } catch (error) {
            return new Promise<ResponseType<IState[]>>(resolve => resolve({
                success: false,
                message: (error as Error).message
            }))
        }
    }
}