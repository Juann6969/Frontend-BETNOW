import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'directo',
  loadChildren: () => import('./pages/directo/directo.module').then(m => m.DirectoModule)
 
},
{
  path: 'misApuestas',
  loadChildren: () => import('./pages/mis-apuestas/mis-apuestas.module').then(m => m.MisApuestasModule)
 
},
{
  path: 'principal',
  loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalModule)
 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
