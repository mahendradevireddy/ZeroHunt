import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';

const routes: Routes = [
  {path:'Admin', component:AdminmanagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
