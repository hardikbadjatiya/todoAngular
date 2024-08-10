import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
name1="";
  parentComponent(data)
  {
    console.warn(data);
  this.name1=data.name;
  
}
    today=Date.now();
       
 }
