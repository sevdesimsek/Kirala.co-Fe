import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListesiService {
 
  url2= "http://172.16.88.54:8081/Urun/getAll";
  url3="http://172.16.88.54:8081/Urun/getByInfo";
  constructor(private http: HttpClient) { }
  ProductListesiService() {
      return this.http.get(this.url2);

  }
  
  postData(body:any){
    return this.http.post(this.url3,body);
  }
}



