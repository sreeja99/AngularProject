import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';
  imgUrl = "";
  url = "https://www.bridgelabz.com";
  userName : string = "";
  nameError : string = "";


  ngOnInit(): void {
    this.title ="Hello From Bridgelabz.";
    this.imgUrl="../assets/icon.jpg";
  }
  onClick($event){
    console.log("Save Button Is Clicked",$event);
    window.open(this.url,"_blank");
  }
  onInput($event){
    const nameRegex = RegExp('^[A-Z]{1}[a-z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError = "Name is incorrect!";
  }
}
