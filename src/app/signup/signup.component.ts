import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public firstname;
  public lastname;
  public email;
  public password;
  public confirmpassword;
  public NewRegister=[];
  // public registering:FormGroup;

  constructor(private formb: FormBuilder, public SignuPService: SignupService, public router: Router ) { }

  public registerForm= this.formb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      confirmpassword:['',[Validators.required]]

  });
     get fName(){return this.registerForm.get('firstname');}
     get lName(){return this.registerForm.get('lastname');}
     get myMail(){return this.registerForm.get('email');}
     get myPass(){return this.registerForm.get('password');}
     get cPass(){return this.registerForm.get('confirmpassword');}

  // checkValid(){
  //   if(this.password==this.confirmpassword){
  //   console.log("non compatible");
  //   return true;
  // }else{
  //   return false;
  // }
  // }
  ngOnInit() {
    // this.checkValid
  }
  Registration(){
    let data=this.registerForm.value;
    // let dataservice=this.SignuPService
    console.log(data)
    this.SignuPService.reg(data).subscribe((res: any) => {
        res = this.NewRegister;
        this.router.navigate(["/login"]);
        if (res.success) {
          console.log("nice one");
        } else {
          console.log("badddddd");
        }
    });
    this.registerForm.reset();

  }
}
