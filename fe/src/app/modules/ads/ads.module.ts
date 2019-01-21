import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule, CollapseModule, BsDropdownModule} from 'ngx-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    NgxPaginationModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: []
})
export class AdsModule {

}
