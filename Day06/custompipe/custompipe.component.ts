import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam facilis amet sapiente in tempora omnis accusamus doloribus, natus quisquam cum dolorum hic assumenda mollitia eligendi ipsa ipsum sunt. Eligendi, culpa.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam facilis amet sapiente in tempora omnis accusamus doloribus, natus quisquam cum dolorum hic assumenda mollitia eligendi ipsa ipsum sunt. Eligendi, culpa.';
  constructor() { }

  ngOnInit(): void {
  }

}
