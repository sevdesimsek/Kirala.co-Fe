import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductTypeService {
 
  // url = "http://172.16.88.54:8080/Sehir/getAll";
  url2= "http://172.16.88.54:8081/Urun/getAllKategori";
  constructor(private http: HttpClient) { }
  ProductTypeService() {
      return this.http.get(this.url2);

  }
  postData(body:any){
    return this.http.get(this.url2,body);
  }
}
