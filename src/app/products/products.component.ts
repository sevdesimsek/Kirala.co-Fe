import { Component, OnInit } from '@angular/core';
import { cityDataService} from '../services/city-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cityDataList:any;
  constructor(private cityData: cityDataService){
    cityData.cityDataService().subscribe((data)=>{
      this.cityDataList= data;
      console.log(this.cityDataList);
    })
  }

  ngOnInit(): void {
  }

}