import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ConnectionsComponent } from './connections/connections.component';

const routes: Routes = [
  {path: '', redirectTo: '/connections', pathMatch: 'full'},
  {path: 'connections', component: ConnectionsComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
