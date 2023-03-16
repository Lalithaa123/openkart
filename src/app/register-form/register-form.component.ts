import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  onRegister(nameRef: HTMLInputElement,emailRef: HTMLInputElement,pwdRef: HTMLInputElement, mobileRef: HTMLInputElement){
    console.log('Entered Name is :: ', nameRef.value);
    console.log('Entered Email is :: ', emailRef.value);
    console.log('Entered password is :: ', pwdRef.value);
    console.log('Entered mobile is :: ', mobileRef.value);
    }

}
