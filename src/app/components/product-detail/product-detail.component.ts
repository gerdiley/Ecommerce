import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSrvService } from 'src/app/services/product-srv.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  id!: number;
  currentProducts: Product | undefined;

  constructor(private router: ActivatedRoute, private pSrv: ProductSrvService) { }


  ngOnInit(): void {
    this.getRoute();
  }

  getRoute(){
    this.router.params.subscribe(res => {
      this.id = +res['id'];
      console.log(this.id)
      this.getCurrentProduct();
    })
  }

  getCurrentProduct(){
   this.pSrv.products.forEach(element => {if(element.id == this.id){this.currentProducts = element}})
   console.log('Psrv', this.currentProducts)
  }

}
