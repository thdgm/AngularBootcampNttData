import { Component } from '@angular/core';
import {Alumno} from './alumno';
import { Router,ActivatedRoute } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseLoadingService } from '@fuse/services/loading';
import {cursos} from '../../../mock-api/alumnoCurso/data';
import {alumnos} from '../../../mock-api/alumnoCurso/data';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
})
export class AlumnoComponent {
  public alumnoss:Array<Alumno>;
  public modo:number = 1;
  public nombreNew:string;
  public edadNew:number;
  public graduadoNew:boolean;
  public infoAlumno:number = 1;


  constructor(private router: Router,private _fuseLoadingService:FuseLoadingService,private confirmation: FuseConfirmationService) {
    this.alumnoss = alumnos;//[new Alumno("Diego Garcia",23,true), new Alumno("Julian Romero",22,false)];
  }

  ngOnInit(){
      console.log("Test de la consola")
    }

  eliminarAlumno(i:number){
    console.log("ELIMINADOO")
    this.alumnoss.splice(i,1)
  }

  verAlumno(i:number){
       this.infoAlumno = 0;
  }
  cambiarModo(){
    this._fuseLoadingService.show();
    const dialogRef = this.confirmation.open({title:"Cambio de modo",message:"va a cambiar el modo"});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
      if(result != "cancelled"){
        if (this.modo == 1){
          this.modo = 0;
          this._fuseLoadingService.hide();
        }else if (this.modo == 0){
          this.modo = 1;
          this._fuseLoadingService.hide();
        }
      }else{
        this._fuseLoadingService.hide();
      }
    
    })
  }
  crearAlumno(){
      console.log(this.nombreNew);
       this.alumnoss.push(new Alumno(this.nombreNew,this.edadNew,this.graduadoNew));
  }
}
