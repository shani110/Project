import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasalesComponent } from './datasales/datasales.component';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';



import { FilterPipe } from './filter.pipe';

// import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    DatasalesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,

   
  ] ,
  exports:[DatasalesComponent]
})
export class SalesModule { }

