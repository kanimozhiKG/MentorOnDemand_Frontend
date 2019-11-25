import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorModule } from './mentor/mentor.module';
import {UserModule}from'./user/user.module';
import { LoginComponent } from './shared-module/login/login.component';
import { UsersignupComponent } from './shared-module/usersignup/usersignup.component';
import { MentloginComponent } from './shared-module/mentlogin/mentlogin.component';
import { MentsignupComponent } from './shared-module/mentsignup/mentsignup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmpassDirective } from './shared-module/confirmpass.directive';
import { MentorService } from '../app/service/mentor.service';
import { UserService } from './service/user.service';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { LoginService } from './service/login.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';
import { UserdashComponent } from './userdash/userdash.component';
import { MentordashComponent } from './mentordash/mentordash.component';
// import { ValidateDirective } from './validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersignupComponent,
    MentloginComponent,
    MentsignupComponent,
    ConfirmpassDirective,
    AdminuserComponent,
    AdminmentorComponent,
    AdmindashComponent,
    AdmintrainingComponent,
    AdmintechnologyComponent,AdminpaymentComponent, SearchComponent, UserdashComponent, MentordashComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
      MentorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule
  ],
  providers: [MentorService,UserService,LoginService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
