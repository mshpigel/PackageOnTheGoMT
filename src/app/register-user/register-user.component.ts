import { Component, OnInit } from '@angular/core';
import { Sender } from '../Classes/Sender';
import { LoginCredentialsService } from '../Services/login-credentials.service';
import { CreditCard } from '../Classes/CreditCard';
import { Operator } from '../Classes/Operator';
import { HttpClient } from '@angular/common/http';
import { UserPath } from '../Classes/UserPath';
import{ UserPathComponent } from '../user-path/user-path.component';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  newlyRegistered: Operator = new Operator();
  cardDetails :CreditCard= new CreditCard();
  active : number =1;
 
  addPath() {
      this.newlyRegistered.uPaths.push(new UserPath());
  } 

storageLocation:String="C:\Users\R\Desktop\tzippy and miri\project\packageOTG\src\assets\ImgPassport";
  constructor(private loggedUser: LoginCredentialsService, private clientHttp: HttpClient) {
    this.newlyRegistered.uPaths=new Array<UserPath>();
    this.addPath();
   }

  SaveNewUser() {
    this.loggedUser.AddUser(this.newlyRegistered).subscribe(res => {
      alert("personal details were saved successfully"),
      this.active=2;
    }, err => {
      alert("There were wrong details. Please make the necessary changes");
    }
    );
  }
  SaveBilling() {
    this.loggedUser.AddBilling(this.cardDetails).subscribe(res => {
      alert("Billing information was saved successfully"),
      this.active=3;
    }, err => {
      alert("There were wrong details. Please make the necessary changes");
     
    }
    );
  }
//   file:File;
  
// saveRoute(event)
// {
//   let formData = new FormData();
//   this.file = event.target.files[0];
//   formData.append('file',this.file);
//   console.log(formData.getAll('file'));
//   this.loggedUser.SaveRoute(formData).subscribe(res => {
//     alert("Billing information was saved successfully")}, err => {
//       alert("There were wrong details. Please make the necessary changes")});
     
// }
  ngOnInit() {
  
    // this.loggedUser.getRequest("tf@hfj.com").subscribe(res => { },
    //   err => { }
    // );
  }


   
 
}
