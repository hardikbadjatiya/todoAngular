import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Login1Component } from './login1/login1.component';

const routes: Routes = [
  {
    path:'adminstrator', children:[
      {
        path:'login1', component:Login1Component
      },
      {
        path:'list', component:ListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstratorRoutingModule { }
