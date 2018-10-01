import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ViewAdComponent } from './view-ad/view-ad.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ViewAdComponent,
    CategoryComponent,
    AdDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
