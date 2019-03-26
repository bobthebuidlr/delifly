import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeWidgetComponent } from './homepage/home-widget/home-widget.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    HomeWidgetComponent
  ],
  imports: [BrowserModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
