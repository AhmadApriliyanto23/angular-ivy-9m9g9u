import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//tutorial dasar-1
import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './home/home.component';
// import { ServicesComponent } from './services/services.component';

@NgModule({
  //tutorial dasar-1
  // imports: [BrowserModule, FormsModule, AppRoutingModule],
  // declarations: [AppComponent, HomeComponent, ServicesComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
