import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Soaron-Demo';
  display = "none";

  ngOnInit(){
    this.openModal()
  }

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }
}
