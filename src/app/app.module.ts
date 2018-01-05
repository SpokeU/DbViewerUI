import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from './../environments/environment';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConnectionsComponent } from './connections/connections.component';
import { ConnectionDetailComponent } from './connection-detail/connection-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    ConnectionsComponent,
    ConnectionDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
