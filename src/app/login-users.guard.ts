import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { LoginserviceService } from './services/loginservice.service';
// import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginUsersGuard implements CanActivate {
  constructor(public route: Router, public loginService: LoginserviceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // this.loginService.loginPage().subscribe((data: any) => {
      //   if (data.success) {
      //     return true;
      //   } else {
      //     this.route.navigate(['/login']);
      //   }
      // });
      return true;
  }

}
