import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@models/product.model';
import { Promotional } from '@models/promotional.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API: URL = new URL('http://localhost:3000');

  products = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    if (!environment.production && environment.host && environment.port) {
      this.API.protocol = 'http';
      this.API.port = environment.port;
      this.API.host = environment.host;
    }
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API.href + 'products');
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.API.href + 'products/' + id);
  }

  getByCategory(category: string): Observable<Product[]> {
    const API = new URL(this.API);
    API.searchParams.append('category', category);
    API.pathname = '/products';
    return this.http.get<Product[]>(API.href);
  }

  getPromotionalById(id: string): Observable<Promotional> {
    return this.http.get<Promotional>(this.API.href + 'promotional/' + id);
  }
}
