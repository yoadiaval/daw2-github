export class Cliente {
  constructor(
    public ncliente: number,
    public nombre: string,
    public activo: boolean = true,
    public saldo: number
  ) {}
  
//método que ingresa dinero al banco
  ingresar(importe: number) {
    this.saldo += importe;
    if (this.saldo > -10000) {
      this.activo = true;
    }
  }
  //método que extrae dinero del banco
  extraer(importe: number) {
    if (this.activo) {
      this.saldo -= importe;
    }
    if (this.saldo < -10000) {
      this.activo = false;
    }
  }
}
