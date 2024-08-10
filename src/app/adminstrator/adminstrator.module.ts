import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstratorRoutingModule } from './adminstrator-routing.module';
import { Login1Component } from './login1/login1.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [Login1Component, ListComponent],
  imports: [
    CommonModule,
    AdminstratorRoutingModule
  ]
})
export class AdminstratorModule { }
