import { Component, OnInit } from '@angular/core';
import { cityDataService } from '../services/city-data.service';
import { ProductTypeService } from '../services/product-type.service';


@Component({
  selector: 'app-pre-products',
  templateUrl: './pre-products.component.html',
  styleUrls: ['./pre-products.component.css']
})

export class PreProductsComponent implements OnInit {

  cityDataList: any;
  productTypeList: any;
  constructor(private cityData: cityDataService, private productType: ProductTypeService) {
    cityData.cityDataService().subscribe((data) => {
      this.cityDataList = data;
      console.log(this.cityDataList);
    })
    productType.ProductTypeService().subscribe((data) => {
      this.productTypeList = data;
      console.log(this.productTypeList);
    })
  }
  ngOnInit(): void {
  }
  getProductFromData(data:any){
    console.warn(data)
  }
}




