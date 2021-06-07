import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmsComponent } from './components/sms/sms.component';
import { SmsitemsComponent } from './components/smsitems/smsitems.component';
import { CreatesmsComponent } from './components/createsms/createsms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SmsComponent,
    SmsitemsComponent,
    CreatesmsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
