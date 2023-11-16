export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export type ResponseType<T> = {
    success: boolean
    data?: T
    message?: string
}

export type Params = {
    params: {
        id: string
    }
}