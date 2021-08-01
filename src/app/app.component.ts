import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  msgForChild: string = "Work Hard on Angular for Best Future !!!";
  msgFromChild : any = "";
  myClick() {
    alert("Hello")
  }

  onChildTriggred(event:any){
    console.log(event)
    this.msgFromChild = event;
  }

}
