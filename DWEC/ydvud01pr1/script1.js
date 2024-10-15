class Hospital{

   
     constructor(codHospital, nombreHospital, direccion, telefono, poblacion, codPostal){
        this.codHospital = codHospital;
        this.nombreHospital = nombreHospital;
        this.direccion = direccion;
        this.telefono = telefono;
        this.poblacion = poblacion;
        this.codPostal = codPostal;
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
}