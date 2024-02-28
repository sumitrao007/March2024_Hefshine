import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core Java",'Advanced Java','HTML,CSS,JS','Angular 12','Docker','.net','MYSQL','Soft Skills','Jenkings'];
  
  arrProduct=[
    {
      name:'OnePlus',
      price:45000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:1
    },
    {
      name:'RealMe',
      price:18000,
      qty:1
    },
    {
      name:'Motorolla',
      price:35000,
      qty:1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
