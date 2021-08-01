import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-dir',
  templateUrl: './ngfor-dir.component.html',
  styleUrls: ['./ngfor-dir.component.scss']
})
export class NgforDirComponent implements OnInit {
  skills:string[] = ["HTML", "css","javaScript","Typescript","Angular"]
  constructor() { }

  ngOnInit(): void {
  }

}
