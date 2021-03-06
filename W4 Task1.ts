class Alumno {
  public nombre: string;
  public edad: number;
  public correo: string;
  public promedio: number;

  constructor(nombre: string, edad: number, correo: string, promedio: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.promedio = promedio;
  }
}


const alumnos: Array<Alumno> = [
  { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
  { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
  { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
  { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
  { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
  { nombre: "Maria Contreras", edad: 20, correo: "mariaC@gmail.com", promedio: 10 },
  { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
  { nombre: "Angelica Galindo", edad: 19, correo: "angelica@galindo.com", promedio: 7 },
  { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
  { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
  { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
  { nombre: "Daniela Medina", edad: 20, correo: "danielamedinaC@gmail.com", promedio: 7 }, ]

  
//- Devuelva una arreglo que contenga todos los estudiantes cuyo promedio es mayor a 6 puntos.
function obtenerEstudiantesConPromediosMayoresASeis(alumnos){
  return alumnos.filter((cadaEstudiante) => cadaEstudiante.promedio > 6)
}
obtenerEstudiantesConPromediosMayoresASeis(alumnos)
  
  
//- Devuelva una lisita de los estudiantes cuyo promedio es menor a 6 puntos y la edad es mayor a 19 años.
function promedioMenorASeisEdadMayorADiecinueve(alumnos){
 return alumnos.filter((cadaEstudiante) => cadaEstudiante.promedio < 6 && cadaEstudiante.edad > 19 )
}
 promedioMenorASeisEdadMayorADiecinueve(alumnos) 


// //- Devuelva un arreglo ordenado segun el promedio de forma ascendente.
function promedioAscendente(alumnos){return alumnos.sort((a, b) => a.promedio - b.promedio)}
promedioAscendente(alumnos)


//- El profesor decidio otorgar 2 puntos a todos los estudiantes cuya nota es menor o igual a 4, devuelva un arreglo que cumpla con esta condición
function teRegaloDos(alumnos: Array<Alumno>): Array<Alumno> {
  return alumnos.map((alumno) => {
        if (alumno.promedio <= 4 ){
       return {
         nombre: alumno.nombre,
         edad: alumno.edad,
         correo: alumno.correo,
         promedio: alumno.promedio + 2,} 
    }
    return alumno
  })
}
teRegaloDos(alumnos)


//- Devuelva el promedio general de todos los alumnos 
function promedioGeneral(alumnos){
  const sumadDePromedios = alumnos.reduce((total, value) => total + value.promedio, 0);
  const resultadoPromedio = sumadDePromedios/alumnos.length
  return resultadoPromedio   
}
promedioGeneral(alumnos)
