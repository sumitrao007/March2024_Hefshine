import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  rating:number=2;
  num:number=5;
  constructor() { }

  ngOnInit(): void {
  }

}
