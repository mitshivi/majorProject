import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private _http:HttpClient) { }

  readAdscat(category){
    return this._http.post('http://localhost:3000/readCategoryAds',{category});
  }
  readAdssubcat(category, subcategory){
    return this._http.post('http://localhost:3000/readCategoryAds1',{category, subcategory});
  }
  
  readSearch(searchdata){
    alert(searchdata);
    return this._http.post('http://localhost:3000/searchads',{searchdata});
  }
}
