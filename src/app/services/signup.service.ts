import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  basepath = "SchoolManag/";
  signupUrl= this.basepath + "registration.php";

  constructor(public http:HttpClient) { }

  reg(student){
    return this.http.post(this.signupUrl,student);
  }

}
