import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-view-ad',
  templateUrl: './view-ad.component.html',
  styleUrls: ['./view-ad.component.css']
})
export class ViewAdComponent implements OnInit {

  constructor(private route:Router) { }


  categories:Array<string>=["Property","Electronics","Vehicles","Others"];
  searchfeild:string;
  subcategories:any={
        "Property":["Apartments","Villa","Bungalow","Sites","Others"],
        "Electronics":["Mobile","Televisions","Others"],
        "Vehicles":["2Wheelers","4Wheelers","Others"],
        "Others":["Books","Furniture"] 
      }
  
  ngOnInit() {
  }


  onTapCategory(category){
    let navigationExtras:NavigationExtras={
      queryParams:{
        "category":category
      }
    }
    this.route.navigate(['category'],navigationExtras);
  }
  onTapSubCategory(category,subcategory){
    let navigationExtras:NavigationExtras={
      queryParams:{
        "category":category,
        "subcategory":subcategory
      }
    }
    this.route.navigate(['category'],navigationExtras);
  }

  search(search){
    console.log(this.searchfeild);
    alert(this.searchfeild.length);
    let navigationExtras:NavigationExtras={
      queryParams:{
        "search":this.searchfeild,
      }
    }
    this.route.navigate(['category'],navigationExtras);

  }
}
