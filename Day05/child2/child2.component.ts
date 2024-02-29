import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childStrEvent=new EventEmitter();

   @Output() childJsonEvent=new EventEmitter();



  strMsg:string="Dasta send from child to parent...";

  jsonObj={
    id:9,
    fname:'Sumit',
    status:'Dynamic'
  }



  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strMsg);
    this.childJsonEvent.emit(this.jsonObj);
  }

}
