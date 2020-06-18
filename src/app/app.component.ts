import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
button_name=true
show(){
  this.button_name=!this.button_name
}
select(i){
  this.images[i].border=!this.images[i].border
}
delete(){
  this.images=this.images.filter(a=>a.border==false)
}
images=[
  {
    name:"../assets/images/1.jpg",
    border:false
  },
  {
    name:"../assets/images/2.jpg",
    border:false
  },
  {
    name:"../assets/images/3.jpg",
    border:false
  },
]
}
