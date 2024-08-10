import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
      import { List1Component } from './list1/list1.component';
    import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {
    path:'useradmin',children:[
      {
        path:'list1', component:List1Component  
      },
      {
        path:'login2', component:Login2Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UseradminRoutingModule { }
