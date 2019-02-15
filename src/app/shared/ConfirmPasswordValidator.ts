import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
    
    static MatchPassword(control: AbstractControl) {
       let password = control.get('Password').value;
      
       let confirmPassword = control.get('confirmPassword').value;

        if(password != confirmPassword) {
            return{
                doesMatchPassword:true
            } ;
            // control.get('confirmPassword').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}