import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Route,RouterModule} from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { FuseFullscreenComponent, FuseFullscreenModule } from '@fuse/components/fullscreen';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const alumnoRoutes: Route[] = [
  {
      path     : '',
      component: AlumnoComponent
  }
];

@NgModule({
  declarations: [
    AlumnoComponent
  ],
  imports     : [
      RouterModule.forChild(alumnoRoutes),
      FuseAlertModule,
      FuseCardModule,
      FuseFullscreenModule,
      FuseHighlightModule,
      FuseLoadingBarModule,
      MatToolbarModule,
      MatButtonToggleModule,
      MatListModule,
      MatCardModule,
      CommonModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      FormsModule,
  

  ]
})
export class AlumnoModule
{
}