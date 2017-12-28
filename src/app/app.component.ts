import {Http, Response} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

declare var jquery:any;
declare var $ :any;

interface Product {
  Color: string;
  ID:string;
  Image:string;
  Location:string;
  Procurement_Cost:string;
  Product_Category:string;
  Product_Code:string;
  Product_Name:string;
  Rent:string;
  Status:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Wrapd Inventory';
  data: any ={};
  lajpat:any={};
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('https://proxy-sauce.glitch.me/https://creator.zoho.com/api/json/wrapd-information-center/view/Products_Report?authtoken=210a98bfcf52f54ff9739fedfbef4587&scope=creatorapi&zc_ownername=anubhav17&raw=true').subscribe(data => {
      console.log(data);
      this.data = data;
      this.getImageSrc();
      console.log(this.lajpat);
    });

    
  }
  getImageSrc(){
    console.log("inside image sourceeeeeeeeeeeeeeeeeeee")
    for(var i=0;i<this.data.Products.length;i++){
      this.data.Products[i].Image = 'https://creatorexport.zoho.com' + $(this.data.Products[i].Image).attr('src');
    }
  }
  
}
