export class Alumno{

  public nombre:string;
  public edad:number;
  public graduado: boolean;

  constructor(nombre:string,edad:number,graduado:boolean){
    this.nombre = nombre;
    this.edad = edad;
    this.graduado=graduado;
  }

}
