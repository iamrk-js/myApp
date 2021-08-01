import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-dec',
  templateUrl: './input-dec.component.html',
  styleUrls: ['./input-dec.component.scss']
})
export class InputDecComponent implements OnInit {
  @Input() msg: string = "";
  @Output() childEvent = new EventEmitter();
  msgParent: string = "Hello Parent Comp How are you ?";
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(): void {
    console.log("Event Triggred");
    this.childEvent.emit(this.msgParent)
  }

}
