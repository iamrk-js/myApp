import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {
  heading:string = "Proerty Binding"
  imgUrl:string = "../../assets/images/ts.png";
  colSpanValue:any = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
