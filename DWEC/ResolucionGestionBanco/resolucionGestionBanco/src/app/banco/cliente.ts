
export class Cliente {
    constructor(
    public ncliente: number,
    public nombre: string,
    public activo: boolean = true,
    public saldo: number = Math.random() * 50000
    ) { }
    }