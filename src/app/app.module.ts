import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {SuiModule} from 'ng2-semantic-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {NgStyle, CommonModule} from "@angular/common";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AboutComponent } from './about/about.component';
import { RouterModule,Routes } from '@angular/router';
import { UserPathComponent } from './user-path/user-path.component';
import { DaysOfWeekComponent } from './days-of-week/days-of-week.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterUserComponent,
    LoginComponent,
    AboutComponent,
    UserPathComponent,
    DaysOfWeekComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,SuiModule, MatInputModule,    MatSliderModule,
CommonModule,
NgbModule,
RouterModule,
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyBGqtyM_aB8AfLONbkd6Ajz0I8XP-ENtO0',
	   libraries: ["places"]
    })
    , BrowserAnimationsModule,
     MatGoogleMapsAutocompleteModule,  

  ],
  providers: [    GoogleMapsAPIWrapper   ],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
