import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  strmsg:string="Hopes so U R Enjoy this angular Module by sumit Raokhande";

  mydate=Date();

  constructor() { }

  ngOnInit(): void {
  }

}
