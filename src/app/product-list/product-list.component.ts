import { Component, OnInit } from '@angular/core';
import { ProductListesiService } from '../services/product-listesi.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productDataList:any;
  constructor(private productList: ProductListesiService) { 
    productList.ProductListesiService().subscribe((data)=>{
      this.productDataList=data;
      console.log(this.productDataList)
    })
  }
  data:any[]=[{name:"sevde"},{name:"ismail"}]
  ngOnInit(): void {
  }

}



  
  