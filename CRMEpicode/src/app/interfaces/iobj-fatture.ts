import { IFatture } from "./ifatture";


export interface IObjFatture {
    content: IFatture[],
    pageable: {
        sort: {
            unsorted: boolean,
            sorted: boolean,
            empty: boolean
        },
        pageNumber: number,
        pageSize: number,
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    number: number,
    first: boolean,
    numberOfElements: number,
    sort: {
        unsorted: boolean,
        sorted: boolean,
        empty: boolean
    },
    size: number,
    empty: boolean
}
