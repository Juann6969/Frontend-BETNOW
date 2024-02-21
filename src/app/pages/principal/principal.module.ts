import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PrincipalComponent } from './principal.component';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: PrincipalComponent}])
  ],
  exports: [PrincipalComponent]
})
export class PrincipalModule { }
