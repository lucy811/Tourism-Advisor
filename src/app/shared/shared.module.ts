import { NgModule } from '@angular/core';
import { EmailValidator } from './email-validator.directive';

@NgModule({
  declarations: [
    EmailValidator
  ],
  exports: [
    EmailValidator
  ]
})
export class SharedModule { }