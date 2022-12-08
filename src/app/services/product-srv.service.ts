import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSrvService {
  products: Product[] = []
  path: string = 'https://fakestoreapi.com/products'
  constructor(private http: HttpClient) { }

  fetchProduct() {
    return this.http.get<Product>('https://fakestoreapi.com/products');
  }
}
