import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminstratorModule } from './adminstrator/adminstrator.module';
import { UseradminModule } from './useradmin/useradmin.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AdminstratorModule,
  UseradminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
