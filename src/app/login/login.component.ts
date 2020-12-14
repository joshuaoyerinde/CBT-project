import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';
// import { setTimeout } from 'timers';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  public loginValid = [];
  public message;
  public passme;
  constructor(private fb: FormBuilder, public lgSerice: LoginserviceService, public router: Router) { }

  submitted = false;
  public profileForm=this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]]
  });
  get myEmail(){return this.profileForm.get('email');}
  get mypass(){return this.profileForm.get('password')}
  // public todays_date = new Date;

  submitForm(){
    let loginform = this.profileForm.value;
    console.log(loginform);
    this.lgSerice.loginPage(loginform).subscribe((res: any) => {
        //  res;
        this.submitted = true;
        // timeout funtion for login

        setTimeout(() => {
            this.submitted = false;
            //
            if (res.success) {
              console.log(res.message);
              this.router.navigate(['/studentProfile']);
            } else {
              console.log(res.message);
              this.router.navigate(['/login']);
              this.message = res.message;
            }
            this.profileForm.reset();
        }, 5000);
      });
    // try{
    //    if (this.profileForm.valid) throw "Valid form (:";
    //   //  console.log("");
    //   else console.log("this is invalid")
    // }
    // catch(err){
    //     console.log("this is "+ err );
    // }

  }

  ngOnInit() {
    // this.editDetails

  }

  // editDetails(){
  //   let details={email: this.email,password:this.password}
  //   this.profileForm.setValue(details);
  // }

}
