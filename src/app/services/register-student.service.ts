import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterStudentService {
  registerpath = "SchoolManag/";
  signupUrl = this.registerpath + "view-register-student.php";

  truncateRegisterStud = "SchoolManag/";
  fromRegisterUrl = this.truncateRegisterStud + "delete-student.php";

  constructor(public http:HttpClient) { }

  registerStudent()
  {
    return this.http.get<any>(this.signupUrl);
  }
  deleteRegisterStudent(id)
  {
    return this.http.post(this.fromRegisterUrl, id);
  }

}
