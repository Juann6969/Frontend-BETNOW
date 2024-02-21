import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoComponent } from './directo.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    DirectoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DirectoComponent}])
  ],
  exports: [DirectoComponent]
})
export class DirectoModule { }
