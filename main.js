//Clase Persona
class Persona {
  constructor(nombre, apellidos, dni, estadoCivil) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.estadoCivil = estadoCivil;
  }

  cambiarEstadoCivil(estadoCivil) {
    this.estadoCivil = estadoCivil;
  }

  imprimirInformacion() {
    console.log(
      `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, dni: ${this.dni}, Estado Civil: ${this.estadoCivil}`
    );
  
  }
}

//Clase Empleado
class Empleado extends Persona{
    constructor(nombre, apellidos, dni, estadoCivil, añoIncorporacion, numDespacho){
        super(nombre, apellidos, dni, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numDespacho = numDespacho;
    }

    cambiarNumDespacho(numDespacho){
        this.numDespacho = numDespacho;
    }
}

//Clase Estudiante
class Estudiante extends Persona{
    constructor(nombre, apellidos, dni, estadoCivil, curso){
        super(nombre, apellidos, dni, estadoCivil);
        this.curso = curso;
    }

    cambiarCurso(curso){
        this.curso = curso;
    }

    imprimirInformacion(){
        console.log(
            `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.dni}, Estado Civil: ${this.estadoCivil}, Curso: ${this.curso}`
        );
    }
}

//Clase Profesor
class Profesor extends Empleado{
    constructor(nombre, apellidos, dni, estadoCivil, añoIncorporacion, numDespacho, departamento){
        super(nombre, apellidos, dni, estadoCivil, añoIncorporacion, numDespacho);
        this.departamento = departamento;
    }

    cambiarDepartamento(departamento){
        this.departamento = departamento;
    }

    imprimirInformacion(){
        console.log(
            `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.dni}, Estado Civil: ${this.estadoCivil}, Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.numDespacho}, Departamento: ${this.departamento}`
        );
    }
}

//Clase PersonalDeServicio
class PersonalDeServicio extends Empleado{
    constructor(nombre, apellidos, dni, estadoCivil, añoIncorporacion, numDespacho, seccionAsignada){
        super(nombre, apellidos, dni, estadoCivil, añoIncorporacion, numDespacho);
        this.seccionAsignada = seccionAsignada;
    }

    cambiarSeccionAsignada(seccionAsignada){
        this.seccionAsignada = seccionAsignada;
    }

    imprimirInformacion(){
        console.log(
            `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.dni}, Estado Civil: ${this.estadoCivil}, Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.numDespacho}, Sección Asignada: ${this.seccionAsignada}`
        );
    }
}

//Clase CentroEducativo
class CentroEducativo{
    constructor(){
        this.personas = [];
    }

    añadirPersona(persona){
        this.personas.push(persona);
    }

    eliminarPersona(dni){
        this.personas = this.personas.filter(persona => persona.dni !== dni);
    }

    buscarPersona(dni){
        return this.personas.find(persona => persona.dni === dni);
    }

    imprimirInformacionPersonas() {
        console.log("**Listado de Personas**");
        this.personas.forEach(persona => persona.imprimirInformacion());
    }
    
    imprimirNominaEmpleados() {
        console.log("**Nómina de Empleados**");
        const empleados = this.personas.filter(persona => persona instanceof Empleado);
        empleados.forEach(empleado => empleado.imprimirInformacion());
    }
}


//Interfaz de usuario

const centroEducativo = new CentroEducativo();

centroEducativo.añadirPersona(new Estudiante("Juan", "Perez", 12345678, "Soltero", "1º"));
centroEducativo.añadirPersona(new Profesor("Maria", "Lopez", 87654321, "Casado", 2010, "A1", "Matemáticas"));
centroEducativo.añadirPersona(new Estudiante("Pedro", "Martinez", 12345678, "Soltero", "2º"));

document.querySelector('#alta').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Alta");

    const nombre = prompt("Introduce el nombre");
    const apellidos = prompt("Introduce los apellidos");
    const dni = parseInt(prompt("Introduce el dni"));
    const estadoCivil = prompt("Introduce el estado civil");

    let tipoPersona;
    do {
        tipoPersona = prompt("Introduce el tipo de persona (Estudiante, Profesor, Personal de Servicio)");  
    } 
    while (!["Estudiante", "Profesor", "PersonalServicio"].includes(tipoPersona));

    switch (tipoPersona) {
        case "Estudiante":
            const cursoMatriculado = prompt("Ingrese el curso matriculado: ");
            centroEducativo.añadirPersona(new Estudiante(nombre, apellidos, dni, estadoCivil, cursoMatriculado));
            console.log("Estudiante añadido correctamente");
          break;

          case "Profesor": 
            const añoIncorporacion = prompt("Ingrese el año de incorporación: ");
            const numDespacho = prompt("Ingrese el número de despacho: ");
            const departamento = prompt("Ingrese el departamento: ");
            centroEducativo.añadirPersona(new Profesor(nombre, apellidos, dni, estadoCivil, añoIncorporacion, numDespacho, departamento));
            console.log("Profesor añadido correctamente");
          break;

          case "PersonalServicio":
            const añoIncorporacionPS = prompt("Ingrese el año de incorporación: ");
            const numDespachoPS = prompt("Ingrese el número de despacho: ");
            const seccionAsignada = prompt("Ingrese la sección asignada: ");
            centroEducativo.añadirPersona(new PersonalDeServicio(nombre, apellidos, dni, estadoCivil, añoIncorporacionPS, numDespachoPS, seccionAsignada));
            console.log("Personal de Servicio añadido correctamente");
            break;
        }
});


document.querySelector('#baja').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Baja");

    const dni = parseInt(prompt("Introduce el dni de la persona a eliminar"));
    centroEducativo.eliminarPersona(dni);
    console.log("Persona eliminada correctamente");
});

document.querySelector('#personal').addEventListener('click', (event) => {
    event.preventDefault();
    centroEducativo.imprimirInformacionPersonas();

    const mensaje = document.querySelector('#mensaje');
    mensaje.innerHTML = `<p>**Listado mostrado en consola**</p>`;
});