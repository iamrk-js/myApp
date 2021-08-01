import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-dir',
  templateUrl: './ng-if-dir.component.html',
  styleUrls: ['./ng-if-dir.component.scss']
})
export class NgIfDirComponent implements OnInit {
  flag:boolean = true;
  newFlag : any = null;
  constructor() { }

  ngOnInit(): void {
  }

  demoDiv(){
    this.flag = !this.flag;
  }

}
