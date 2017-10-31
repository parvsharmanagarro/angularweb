import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { ButtonComponent } from './button/button.component';
import { PictureComponent } from './picture/picture.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    ButtonComponent,
    PictureComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
