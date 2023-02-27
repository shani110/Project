import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DatasalesComponent } from './sales/datasales/datasales.component';
import { SalesModule } from './sales/sales.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'




@NgModule({
  declarations: [
    AppComponent,
   
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SalesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
