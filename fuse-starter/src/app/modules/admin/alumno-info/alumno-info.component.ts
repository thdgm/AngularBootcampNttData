import { Component,Input, Output, EventEmitter} from '@angular/core';
import {Alumno} from "../alumno/Alumno";
import { Router,ActivatedRoute } from '@angular/router';
import {cursos} from '../../../mock-api/alumnoCurso/data';
import {alumnos} from '../../../mock-api/alumnoCurso/data';

@Component({
  selector: 'app-alumno-info',
  templateUrl: './alumno-info.component.html',
  styleUrls: ['./alumno-info.component.scss']
})
export class AlumnoInfoComponent {
  @Input () alumnoNew = new Alumno("",0,true);
  @Output() edadCambiada = new EventEmitter<number>();
  public alumnos:Array<Alumno>;
  public edadInput:number;
  public alumnoInfo:Alumno;
  constructor(private _Activatedroute:ActivatedRoute, private _router:Router){
     this.alumnos = alumnos;//[new Alumno("Diego Garcia",23,true), new Alumno("Julian Romero",22,false)]
 
   }
  ngOnInit(): void {
    console.log("ESTOOOO");
    console.log(this._Activatedroute.snapshot.params['id']);
    this.alumnoInfo = this.alumnos[this._Activatedroute.snapshot.params['id']];;
 }

   cambiarEdad(){
   this.alumnoInfo.edad = this.edadInput;
   this.alumnoNew.edad = this.edadInput;
   this.edadCambiada.emit(this.edadInput);
  }
}
