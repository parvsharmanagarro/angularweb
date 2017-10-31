import { Component, OnInit } from '@angular/core';
var index:number;
index=0;
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
arr:string[]=["Menu","Deals","Store finder","Gift card","blog","investor","feedback","ads"];
content:string;
  constructor() {
    this.content=this.arr[index];
    index++;
  }

  ngOnInit() {
  }

}
