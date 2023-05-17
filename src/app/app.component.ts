import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumber = false;
  includeSymbol = false;
  password = '';


  onClickBtn(){
   const numbers = '123456789';
   const letters = 'abcdefghijklmnopqrstuvwxyz';
   const symbols = '!@#$%^&*()';

   let validChars = '';
   if(this.includeLetters){
    validChars += letters;
   } 
   if(this.includeNumber){
    validChars += numbers;
   } 
   if(this.includeSymbol){
    validChars += symbols;
   } 

   let generatedPassword = '' ;
   for (let i = 0; i < this.length; i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index]; 
   }

   this.password = generatedPassword;
   
  }

  OnUseLetter() {
    this.includeLetters = ! this.includeLetters;
  }

  OnUseNumber() {
    this.includeNumber = ! this.includeNumber;
  }

  OnUseSymbol() {
    this.includeSymbol= ! this.includeSymbol;
  }

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
}
