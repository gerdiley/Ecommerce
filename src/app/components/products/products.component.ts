import { Component, OnInit } from '@angular/core';
import { ProductSrvService } from 'src/app/services/product-srv.service';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})



export class ProductsComponent implements OnInit {

  products: Product[] = [];

  sub!: Subscription;


  constructor(private http: HttpClient,private pSrv: ProductSrvService,) { }

  ngOnInit(): void {
     this.getAllProducts()
  }

  getAllProducts() {
    this.sub = this.pSrv.fetchProduct().subscribe((res:any) => {
      this.pSrv.products = res;
      this.products = res;
      console.log(this.products);
    })
  }

}
