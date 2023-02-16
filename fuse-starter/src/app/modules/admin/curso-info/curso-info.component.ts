import { Component, Input } from '@angular/core';
import {Alumno} from "../alumno/Alumno";
import {Curso} from "../curso/Curso";
import { Router,ActivatedRoute } from '@angular/router';
import {cursos} from '../../../mock-api/alumnoCurso/data';
import {alumnos} from '../../../mock-api/alumnoCurso/data';

@Component({
  selector: 'app-curso-info',
  templateUrl: './curso-info.component.html',
  styleUrls: ['./curso-info.component.scss']
})
export class CursoInfoComponent {

  public title:string = 'Curso Component';
  public numero:number = 1;
  public showAlumn = false;
  public alumnos:Array<Alumno>;
  public newName:string;
  public newEdad:number;
  public modo:number = 1;

  public fecha:Date = new Date();
  public cursoInfo:Curso;
  public cursos:Array<Curso>;

  @Input () cursoConcreto = new Curso(0,"","");

  constructor(

  private _Activatedroute:ActivatedRoute,
  private _router:Router){
    this.alumnos = alumnos;//[new Alumno("Diego Garcia",23,true), new Alumno("Julian Romero",22,false)]
    this.cursos = cursos;//[new Curso(1,'A',"Unizar"), new Curso(2,'B',"Unizar")]

  }

  //ngOnInit(){
   // this.status.getStatus().subscribe((data:Status) => this.logger.log(data.mensaje));
  //}
 ngOnInit() {
      console.log("ESTOOOO");
      console.log(this._Activatedroute.snapshot.params['id']);
       this.cursoInfo = this.cursos[this._Activatedroute.snapshot.params['id']];
       //this.id=this._Activatedroute.snapshot.params['id'];
       //let products=this._productService.getProducts();
       //this.product=products.find(p => p.productID==this.id);
   }
  showAlumns(){
    this.showAlumn = !this.showAlumn
  }

  cambiarModo(){
      if (this.modo == 1){
        this.modo = 0
      }else if (this.modo == 0){
        this.modo = 1
      }
    }

  crearAlumno(){
    this.alumnos.push(new Alumno(this.newName,this.newEdad,true));
   // this.edadInput.push(this.newEdad);

  }

  avisarCambio(mensaje:number){
    console.log(mensaje)
  }
}
