import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import {AuthenticationService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {UserService} from "./service/user.service";
import { IntervalListComponent } from './interval-list/interval-list.component';
import { IntervalListService } from './service/intervalListService';
import { ApiGateway } from './service/apiGateway';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    IntervalListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, UserService, IntervalListService, ApiGateway],
  bootstrap: [AppComponent]
})
export class AppModule { }
