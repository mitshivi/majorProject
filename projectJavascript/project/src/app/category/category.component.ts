import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route:ActivatedRoute, private adservice:AdService) { }

  info:any;
  category:string;
  subcategory:string;
  search:string;
  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
     
      this.category=params.category;
      this.subcategory=params.subcategory;
      this.search=params.search;
      console.log(params);
      if(this.category!=null && this.subcategory== null){
        this.adservice.readAdscat(this.category).subscribe((data)=>{
          this.info=data;
         
      });
    }
      if(this.subcategory!=null){
        this.adservice.readAdssubcat(this.category,this.subcategory).subscribe((data)=>{
          this.info=data;
        });
    }
      if(this.search!=null && ( this.category!==null || this.subcategory!== null)){
        this.adservice.readSearch(this.search).subscribe((data)=>{
          this.info=data;
        });
    }
    })
  }
  details(ref){
    
  }



}

