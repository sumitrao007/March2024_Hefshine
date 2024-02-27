import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Click Event Occur...")
  }

  onImage(){
    console.log("U r in Image click ");
  }

  onDollerEvent(myevent:any){
    console.log(myevent);
    console.log(myevent.target.value)
  }

  onSend(myname:any){
    console.log(myname);
    console.log(myname.value);
    myname.style.background='green';
    myname.style.color='white';
  }

  onSend1(myvalue:string){
  console.log(myvalue);

  }

  onChange(){
    console.log("Change Event Occur...")
  }

  onKeyup(){
    console.log("Key Up event Occur...")
  }

  onKeyDown(){
    console.log("Key Down event Occur...")
  }

}
