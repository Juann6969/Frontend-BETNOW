import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MisApuestasComponent } from './mis-apuestas.component';



@NgModule({
  declarations: [
    MisApuestasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: MisApuestasComponent}])
  ],
  exports: [MisApuestasComponent]
})
export class MisApuestasModule { }
