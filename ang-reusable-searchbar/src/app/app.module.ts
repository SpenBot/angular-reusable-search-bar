import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
