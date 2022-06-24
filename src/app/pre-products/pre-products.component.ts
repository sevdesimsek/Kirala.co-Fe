import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { cityDataService } from '../services/city-data.service';
import { ProductListesiService } from '../services/product-listesi.service';



@Component({
  selector: 'app-pre-products',
  templateUrl: './pre-products.component.html',
  styleUrls: ['./pre-products.component.css']
})

export class PreProductsComponent implements OnInit {
  category:any;
  date:any;
  il:any;
  cityDataList: any;
  productDataList: any;
  constructor(private cityData: cityDataService, private productData: ProductListesiService) {
    cityData.cityDataService().subscribe((data) => {
      this.cityDataList = data;
      console.log(this.cityDataList);
    })
    
    productData.ProductListesiService().subscribe((data) => {
      this.productDataList = data;
      console.log(this.productDataList);
    })
  }
  ngOnInit(): void {
  }
  getProductFromData(data:any){
    console.warn(data)
  }

  onAdd(){
    const body={
      tarih:this.date,
      sehir:this.il,
      kategori:this.category,
    };
    

    this.productData.postData(body).subscribe((data)=>{
      console.log("deneme")
      alert('aaaaaaa')});

    }

  }





