import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  Loginpath = 'SchoolManag/';
  loginUrl = this.Loginpath + 'loginpage.php';

  constructor(public http: HttpClient) { }
  loginPage(logindata) {
    return this.http.post(this.loginUrl, logindata);
  }
  loginId() {
    return this.http.get<any>(this.loginUrl);
  }
}
