import { IClienti } from "./iclienti";

export interface IFatture {
    id?: number,
    data: string,
    numero: number,
    anno: number,
    importo: number,
    stato: {
        id?: number,
        nome: string
    },
    cliente: IClienti
}
