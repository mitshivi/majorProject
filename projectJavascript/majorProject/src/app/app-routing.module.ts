import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';




const routes: Routes = [{path:'category', component:CategoryComponent},
{path:'adDetails', component:AdDetailsComponent},
{ path: '', redirectTo: '/category', pathMatch: 'full' }
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
