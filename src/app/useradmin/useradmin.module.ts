import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseradminRoutingModule } from './useradmin-routing.module';
import { Login2Component } from './login2/login2.component';
import { List1Component } from './list1/list1.component';
 

@NgModule({
              declarations: [Login2Component, List1Component],
  imports: [
    CommonModule,
    UseradminRoutingModule
  ]
})
export class UseradminModule { }
