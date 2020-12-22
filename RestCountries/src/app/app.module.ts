import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchStatiComponent } from './search-stati/search-stati.component';
import { StatoComponent } from './search-stati/stato/stato.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStatiComponent,
    StatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
