export interface LoginResponse {
    accessToken: string,
    user : {
        id: number,
        email: string
    }
}
export interface RegisterResponse {
    accessToken: string,
    user : {
        id: number,
        email: string
    }
}
export interface LoginRequest {
    email: string,
    password: string
}
export interface RegisterRequest {
    name: string,
    surname:string
    email: string,
    password: string
}
