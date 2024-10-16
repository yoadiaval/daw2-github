class Hospital{
     constructor(codHospital, nombreHospital, direccion, telefono, poblacion, codPostal){
        this.codHospital = codHospital;
        this.nombreHospital = nombreHospital;
        this.direccion = direccion;
        this.telefono = telefono;
        this.poblacion = poblacion;
        this.codPostal = codPostal;
    }
    mostrarDatos(){
      document.write(`
      codigo: ${this.codHospital} </br>
      nombreHospital: ${this.nombreHospital}</br>
      direccion: ${this.direccion}</br>
      telefono: ${this.telefono}</br>
      poblacion: ${this.poblacion}</br>
      codigo postal: ${this.codPostal}</br>
      `);
    }
}


class Medico{
   constructor(codMedico, nombre, apellidos, dni,direccion, telefono, poblacion,codPostal, fechaNacimiento, especialidad, sueldo, Hospital){
    this.codMedico = codMedico;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.direccion = direccion;
    this.telefono = telefono;
    this.poblacion = poblacion;
    this.codPostal = codPostal;
    this.fechaNacimiento = fechaNacimiento;
    this.especialidad = especialidad;
    this.sueldo = sueldo;
    this.hospital = hospital;
   }
   cambiarSueldo(nuevoSueldo){
      this.sueldo = nuevoSueldo;
   }
   retencionMédico(porcentajeRetencion){
     retencion =  (porcentajeRetencion * sueldo)/100;
   }
   mostrarDatos(){
      divDatos = document.getElementById("divDatos")
      divDatos.innerHTML = `<h2>Datos del médico</h2>
                             codigo: ${this.codMedico}</br>
                             nombre: ${this.nombre}</br>
                             apellidos: ${this.apelidos}</br>
                             dni: ${this.dni}</br>
                             direccion: ${this.direccion}</br>
                             telefono: ${this.telefono}</br>
                             pobacion: ${this.poblacion}</br>
                             codigo postal: ${this.codPostal}</br>
                             fecha de nacimiento: ${this.fechaNacimiento}</br>
                             especialidad: ${this.especialidad}</br>
                             sueldo: ${this.sueldo}
                            `;   
   }
}
//codHospital, nombreHospital, direccion, telefono, poblacion, codPostal
const hospitalRibera = new Hospital("123","Hospital Rivera", "Calle 13", "1254876","Valencia","46009");
//codMedico, nombre, apellidos, dni,direccion, telefono, poblacion,codPostal, fechaNacimiento, especialidad, sueldo, Hospital
const medicoDigestivo = new Medico("1236", "Medico", "Traumatólogo", "140526" ,"calle 13","2154878", "valencia", "46009", "18 enero del 95"  );