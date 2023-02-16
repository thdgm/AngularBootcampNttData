import { Component } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseLoadingService } from '@fuse/services/loading';
import {Curso} from './Curso';
import {cursos} from '../../../mock-api/alumnoCurso/data';
import {alumnos} from '../../../mock-api/alumnoCurso/data';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
})
export class CursoComponent{
  public cursoss:Array<Curso>;
  public modo:number = 1;
  public numeroNew:number;
  public letraNew:string;
  public centroNew:string;
  public mode: number = 1;

  constructor(private _fuseLoadingService:FuseLoadingService,private confirmation: FuseConfirmationService){
    this.cursoss = cursos;//[new Curso(1,'A',"Unizar"), new Curso(2,'B',"Unizar")]
  }

  public show():void{

    const dialogRef = this.confirmation.open({title:"prueba",message:"Activando el loading"});
    dialogRef.afterClosed().subscribe((result) => {this._fuseLoadingService.show();})
    
  }
  eliminarCurso(i:number){
    console.log("ELIMINADOO")
    this.cursoss.splice(i,1)
  }

  public hide():void{
    this._fuseLoadingService.hide();
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
 crearCurso(){
    this.cursoss.push(new Curso(this.numeroNew,this.letraNew,this.centroNew));

  }
  
}
