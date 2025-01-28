export class Factura {
    constructor(
      public id: number,
      public cliente: string,
      public fecha: string,
      public importe:number,
      public iva: boolean = false
    ) { }  
  }