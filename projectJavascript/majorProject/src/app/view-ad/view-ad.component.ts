import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-view-ad',
  templateUrl: './view-ad.component.html',
  styleUrls: ['./view-ad.component.css']
})
export class ViewAdComponent implements OnInit {


  constructor(private route:Router, private adservice:AdService) { }
  searchValue:string="";
  searchboo:boolean=false;
  
  cloneArray:any
  categories:Array<string>=["Property","Electronics","Vehicles","Others"];


  subcategories:any={
        "Property":["All Property","Apartment","Villa","Bungalow","Sites","Others"],
        "Electronics":["All Electronics","Mobile","Television","Others"],
        "Vehicles":["All Vehicles","2Wheelers","4Wheelers","Others"],
        "Others":["All Others","Books","Furniture"] 
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
  Search(){
  
  let navigationExtras:NavigationExtras={
  queryParams:{
  "search":this.searchValue,
  }
  }
  this.route.navigate(['category'],navigationExtras);
  }

  finalSuggestions:Array<string>



showSuggestions(){

if(this.searchValue==""){

this.searchboo=false;

}

else{

this.searchboo=true;

}

let suggestionArray:Array<string>=[];

this.adservice.readSearch(this.searchValue).subscribe((data:any)=>{


for (let i=0; i<data.length;i++){

if(data[i]["location"].toLocaleLowerCase().search(this.searchValue.toLocaleLowerCase())!=-1){

suggestionArray.push(data[i]["location"])

}

if(data[i]["city"].toLocaleLowerCase().search(this.searchValue.toLocaleLowerCase())!=-1){

suggestionArray.push(data[i]["city"])

}

if(data[i]["category"].toLocaleLowerCase().search(this.searchValue.toLocaleLowerCase())!=-1){

suggestionArray.push(data[i]["category"])

}

if(data[i]["subCategory"].toLocaleLowerCase().search(this.searchValue.toLocaleLowerCase())!=-1){

suggestionArray.push(data[i]["subCategory"])

}

}


this.finalSuggestions=this.removeDuplicates(suggestionArray);


})

}

removeDuplicates(dupArray){

let unique_array = []

for(let i = 0;i < dupArray.length; i++){

if(unique_array.indexOf(dupArray[i]) == -1){

unique_array.push(dupArray[i])

}

}

return unique_array

}



displaySearch(ref){

this.searchboo=false

this.searchValue=ref;

}



 
}
