import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {Route,RouterModule} from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { FuseFullscreenComponent, FuseFullscreenModule } from '@fuse/components/fullscreen';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { CursoComponent } from './curso.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'

const cursoRoutes: Route[] = [
  {
      path     : '',
      component: CursoComponent
  }
];

@NgModule({
  declarations: [
    CursoComponent
  ],
  imports     : [
      RouterModule.forChild(cursoRoutes),
      FuseAlertModule,
      FuseCardModule,
      MatButtonModule,
      FuseFullscreenModule,
      FuseHighlightModule,
      MatIconModule,
      FuseLoadingBarModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatListModule,
      MatCardModule,
      CommonModule,
      FormsModule,
      
  ]
})
export class CursoModule
{
}