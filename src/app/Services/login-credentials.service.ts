import { Injectable } from '@angular/core';
import { Sender } from '../Classes/sender';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCard } from '../Classes/CreditCard';
import { Operator } from '../Classes/Operator';


@Injectable({
  providedIn: 'root'
})
export class LoginCredentialsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'


    })
  };
  constructor(private HTTP: HttpClient) { }
  newOperator: Operator = new Operator();
  AddUser(userToAdd: Operator) {
    return this.HTTP.post("http://localhost:54058/user/AddUser", userToAdd, this.httpOptions);
  }
  AddBilling(creditToAdd: CreditCard) {
    return this.HTTP.post("http://localhost:54058/user/AddBilling", creditToAdd, this.httpOptions);
  }
  SaveRoute(imgPassport: FormData) {
    return this.HTTP.post("http://localhost:54058/user/SaveRoute", imgPassport.getAll('file'), this.httpOptions);
  }
  getRequest(email){
    return this.HTTP.get("http://localhost:54058/user/login/"+ email);
  }
//    GetSender(email :string,password :string) : Observable <Sender>
//    {

//      this.HTTP.get("http://localhost:59047/user/api/GetSender").subscribe((x)=> this.s =x);
// https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=keyyyyyyyyyyyyyyyy
// return s;
//   }
// }
}
