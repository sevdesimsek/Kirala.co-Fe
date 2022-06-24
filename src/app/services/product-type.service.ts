import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductTypeService {
 
  url = "http://172.16.88.54:8080/Sehir/getAll";
  constructor(private http: HttpClient) { }
  ProductTypeService() {
      return this.http.get(this.url);

  }
}
