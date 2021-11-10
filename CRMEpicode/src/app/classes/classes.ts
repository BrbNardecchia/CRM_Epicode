export class Cliente {

    ragioneSociale: string;
    partitaIva: string;
    tipoCliente: string;
    email: string;
    pec: string;
    telefono: string;
    nomeContatto: string;
    cognomeContatto: string;
    telefonoContatto: string;
    emailContatto: string;
    indirizzoSedeOperativa: {
        via: string;
        civico: string;
        cap: string;
        localita: string;
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
        cap: string;
        localita: string;
        comune: {
            nome: string;
            provincia: {
                nome: string;
                sigla: string;
            }
        }
    }
    constructor() {
        this.ragioneSociale = '';
        this.partitaIva = '';
        this.tipoCliente = '';
        this.email = '';
        this.pec = '';
        this.telefono = '';
        this.nomeContatto = '';
        this.cognomeContatto = '';
        this.telefonoContatto = '';
        this.emailContatto = '';
        this.indirizzoSedeOperativa = {
            via : '',
            civico: '',
            cap: '',
            localita: '',
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
            cap: '',
            localita: '',
            comune: {
                nome: '',
                provincia: {
                    nome: '',
                    sigla: ''
                }
            }

        }
    }
}
