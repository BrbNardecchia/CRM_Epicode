export interface Ilogin {
    username: string,
    password: string
}

export interface IloginRisp {
    id: number,
    username: string, 
    email: string,
    roles: string[],
    accessToken: string,
    tokenType: string
}