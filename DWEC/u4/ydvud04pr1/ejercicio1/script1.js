const divDatos = document.getElementById("divDatos");
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
      divDatos.innerHTML += `
      <h2>Datos de la instancia ${this.nombreHospital}</h2>
      Codigo: ${this.codHospital} <br/>
      Nombre Hospital: ${this.nombreHospital}<br/>
      Direccion: ${this.direccion}<br/>
      Telefono: ${this.telefono}<br/>
      Poblacion: ${this.poblacion}<br/>
      Codigo postal: ${this.codPostal}<br/><br/>
      `;
    }
}


class Medico{
   constructor(codMedico, nombre, apellidos, dni, direccion, telefono, poblacion,codPostal, fechaNacimiento, especialidad, sueldo, hospital){
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
   retencionMedico(porcentajeRetencion){
    const retencion =  (porcentajeRetencion * this.sueldo)/100;
    return retencion;
   }
   mostrarDatos(){
     
      divDatos.innerHTML += `<h2>Datos del médico ${this.nombre}</h2>
                             Codigo: ${this.codMedico}</br>
                             Nombre: ${this.nombre}</br>
                             Apellidos: ${this.apellidos}</br>
                             DNI: ${this.dni}</br>
                             Direccion: ${this.direccion}</br>
                             Telefono: ${this.telefono}</br>
                             Pobacion: ${this.poblacion}</br>
                             Codigo postal: ${this.codPostal}</br>
                             Fecha de nacimiento: ${this.fechaNacimiento}</br>
                             Especialidad: ${this.especialidad}</br>
                             Sueldo: ${this.sueldo}<br/>
                             Hospital: ${this.hospital.nombreHospital}<br/><br/>
                            `;   
   }
}
//CREACION DE INSTANCIAS
const hospitalRibera = new Hospital("123","Hospital Rivera", "Calle 13", "1254876","Valencia","46009");
const medicoDigestivo = new Medico("1236", "Medico", "Digestivo", "140526" ,"calle 13","2154878", "valencia", "46009", "18 enero del 95", "Digestivo", 1200, hospitalRibera );
const medicoTraumatologo = new Medico("1236", "Medico", "Traumatólogo", "140526" ,"calle 13","2154878", "valencia", "46009", "18 enero del 95", "Traumatólogo", 1300, hospitalRibera );

//CAMBIO DE SUELDO DEL MÉDICO TRAUMATÓLOGO
medicoTraumatologo.cambiarSueldo(2300);
divDatos.innerHTML += `
                     <h3>Nuevo sueldo médico Traumatólogo</h3>
                     ${medicoTraumatologo.sueldo} &euro;
                     `
//MUESTRA DE LOS DATOS DE LA INSTANCIA HOSPITAL RIVERA
hospitalRibera.mostrarDatos();

//CALCULO DE RETENCIONES DE LAS INSTANCIAS DE MÉDICOS
retencionMedDig = medicoDigestivo.retencionMedico(10);
retencionMedTrau = medicoTraumatologo.retencionMedico(20); 


//SE MUESTRAN LOS DATOS DE LOS MEDICOS
medicoDigestivo.mostrarDatos();
divDatos.innerHTML += `
                     <strong>Retención:</strong> ${retencionMedDig}
                      <strong>Sueldo final:</strong> ${medicoDigestivo.sueldo - retencionMedDig}
                     `
medicoTraumatologo.mostrarDatos()
 divDatos.innerHTML += `   
                      <strong>Retención:</strong> ${retencionMedDig}
                      <strong>Sueldo final:</strong> ${medicoTraumatologo.sueldo - retencionMedDig}
                      `;
