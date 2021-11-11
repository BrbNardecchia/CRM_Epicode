export class Cliente {

    ragioneSociale: string;
    partitaIva: string;
    tipoCliente: string;
    email: string;
    nomeContatto: string;
    cognomeContatto: string;
    telefonoContatto: string;
    emailContatto: string;
    indirizzoSedeOperativa: {
        via: string;
        civico: string;
        comune: {
            nome: string;
            provincia: {
                nome: string;
                sigla: string;
            }
        }
    }
    indirizzoSedeLegale: {
        via: string;
        civico: string;
        comune: {
            nome: string;
            provincia: {
                nome: string;
                sigla: string;
            }
        }
    }
    fatturatoAnnuale: number
    constructor() {
        this.ragioneSociale = '';
        this.partitaIva = '';
        this.tipoCliente = '';
        this.email = '';
        this.nomeContatto = '';
        this.cognomeContatto = '';
        this.telefonoContatto = '';
        this.emailContatto = '';
        this.indirizzoSedeOperativa = {
            via : '',
            civico: '',
            comune: {
                nome: '',
                provincia: {
                    nome: '',
                    sigla: ''
                }
            }

        }
        this.indirizzoSedeLegale = {
            via : '',
            civico: '',
            comune: {
                nome: '',
                provincia: {
                    nome: '',
                    sigla: ''
                }
            }

        }
        this.fatturatoAnnuale = 0
    }
}
