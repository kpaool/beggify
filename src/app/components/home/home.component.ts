import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products =[];
  constructor(private ProductApiService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }  



  getProducts() {
    this.ProductApiService.getProducts().subscribe((response:any) => {
      this.products = response.products;
      console.log(response.products);
    });
  }
}
