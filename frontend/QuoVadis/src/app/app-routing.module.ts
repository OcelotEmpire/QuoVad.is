import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: HostComponent },
  //{ path: 'host/:id' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
