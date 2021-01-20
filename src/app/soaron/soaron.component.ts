import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-soaron',
  templateUrl: './soaron.component.html',
  styleUrls: ['./soaron.component.css']
})
export class SoaronComponent implements OnInit {

  constructor() { }
  display = "none";
  @ViewChild("exampleModal", {static:true})  exampleModal : any;

  ngOnInit() {
   }

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

}
