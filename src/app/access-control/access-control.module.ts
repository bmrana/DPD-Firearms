import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [LoginComponent],
  providers: [
    AuthService,
  ]
})
export class AccessControlModule { }
