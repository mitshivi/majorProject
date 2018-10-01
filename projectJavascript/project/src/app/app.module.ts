import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewAdComponent } from './view-ad/view-ad.component';
import { AppRoutingModule } from './/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryComponent } from './category/category.component';
import {HttpClientModule} from '@angular/common/http';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import {FormsModule} from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component'


@NgModule({
  declarations: [
    AppComponent,
    ViewAdComponent,
    CategoryComponent,
    AdDetailsComponent,
    LoginformComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
