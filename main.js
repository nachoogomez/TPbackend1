//Clase Persona
class Persona {
  constructor(nombre, apellidos, id, estadoCivil) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.id = id;
    this.estadoCivil = estadoCivil;
  }

  cambiarEstadoCivil(estadoCivil) {
    this.estadoCivil = estadoCivil;
  }

  imprimirInformacion() {
    console.log(
      `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.id}, Estado Civil: ${this.estadoCivil}`
    );
  
  }
}

//Clase Empleado
class Empleado extends Persona{
    constructor(nombre, apellidos, id, estadoCivil, añoIncorporacion, numDespacho){
        super(nombre, apellidos, id, estadoCivil);
        this.añoIncorporacion = añoIncorporacion;
        this.numDespacho = numDespacho;
    }

    cambiarNumDespacho(numDespacho){
        this.numDespacho = numDespacho;
    }
}

//Clase Estudiante
class Estudiante extends Persona{
    constructor(nombre, apellidos, id, estadoCivil, curso){
        super(nombre, apellidos, id, estadoCivil);
        this.curso = curso;
    }

    cambiarCurso(curso){
        this.curso = curso;
    }

    imprimirInformacion(){
        console.log(
            `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.id}, Estado Civil: ${this.estadoCivil}, Curso: ${this.curso}`
        );
    }
}

//Clase Profesor
class Profesor extends Empleado{
    constructor(nombre, apellidos, id, estadoCivil, añoIncorporacion, numDespacho, departamento){
        super(nombre, apellidos, id, estadoCivil, añoIncorporacion, numDespacho);
        this.departamento = departamento;
    }

    cambiarDepartamento(departamento){
        this.departamento = departamento;
    }

    imprimirInformacion(){
        console.log(
            `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.id}, Estado Civil: ${this.estadoCivil}, Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.numDespacho}, Departamento: ${this.departamento}`
        );
    }
}

//Clase PersonalDeServicio
class PersonalDeServicio extends Empleado{
    constructor(nombre, apellidos, id, estadoCivil, añoIncorporacion, numDespacho, seccionAsignada){
        super(nombre, apellidos, id, estadoCivil, añoIncorporacion, numDespacho);
        this.categoria = categoria;
    }

    cambiarSeccionAsignada(seccionAsignada){
        this.seccionAsignada = seccionAsignada;
    }

    imprimirInformacion(){
        console.log(
            `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, ID: ${this.id}, Estado Civil: ${this.estadoCivil}, Año de Incorporación: ${this.añoIncorporacion}, Número de Despacho: ${this.numDespacho}, Sección Asignada: ${this.seccionAsignada}`
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

    eliminarPersona(id){
        this.personas = this.personas.filter(persona => persona.id !== id);
    }

    buscarPersona(id){
        return this.personas.find(persona => persona.id === id);
    }
}

new Persona('Juan', 'Perez', 1, 'Soltero').imprimirInformacion();
new Estudiante('Juan', 'Perez', 1, 'Soltero', '1º ESO').imprimirInformacion();
new Profesor('Juan', 'Perez', 1, 'Soltero', 2020, 1, 'Matemáticas').imprimirInformacion();

//Interfaz de usuario

const centroEducativo = new CentroEducativo();

document.querySelector('#alta').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Alta");

    
            
    

});


document.querySelector('#baja').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Baja");
});

document.querySelector('#personal').addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Listado de personal");
});