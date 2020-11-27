import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';
  imgUrl = "";

  ngOnInit(): void {
    this.title ="Hello From Bridgelabz.";
    this.imgUrl="../assets/icon.jpg";
  }
}
