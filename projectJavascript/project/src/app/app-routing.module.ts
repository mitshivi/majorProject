import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';




const routes: Routes = [{path:'category', component:CategoryComponent},

];


@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  exports:[RouterModule],

  declarations: []
})
export class AppRoutingModule { }
