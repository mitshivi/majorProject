import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private _http:HttpClient) { }

  readAdscat(category):Observable<any>{
    return this._http.post('http://localhost:8081/readCategoryAds',{category});
  }
  readAdssubcat(category, subcategory):Observable<any>{
    return this._http.post('http://localhost:8081/readCategoryAds1',{category, subcategory});
  }
  readUserData(userId):Observable<any>{
    return this._http.post('http://localhost:8081/readUserData',{userId})
  }
  readSearch(searchdata){
  return this._http.post('http://localhost:8081/searchads',{searchdata}); 
  }
  getAllAds():Observable<Object>{
    return this._http.get("http://localhost:8081/getAllAds");
  }
}
