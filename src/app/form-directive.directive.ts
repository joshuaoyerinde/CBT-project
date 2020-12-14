import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl } from '@angular/forms';
// import { Key } from 'protractor';

@Directive({
  selector: '[appFormDirective]',
  providers: [{provide: NG_VALIDATORS, useExisting: FormDirectiveDirective, multi: true}]
})
export class FormDirectiveDirective extends Validators{
validate(control: AbstractControl){
  let email=control.value;
  if(email && (email.includes("gmail")|| email.includes("yahoo"))){
    return {formMailInvalid: true};
  }else{
    return null;
  }
}

  // constructor() { }

}
