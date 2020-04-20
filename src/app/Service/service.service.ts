import { Injectable } from '@angular/core';
import { Products} from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = 'https://5e7aa9d40e0463001633237a.mockapi.io/product';
  products: Products;
  constructor(private http: HttpClient) { }
  getListProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(this.api);
  }

  deleteProduct(id) {
    return this.http.delete(`${this.api}/${id}`);
  }

  updateProduct(product: Products) {
    return this.http.put<Products>(`${this.api}/${product.id}`, product);
  }
  insertProduct(product: Products) {
    return this.http.post<Products>(`${this.api}`, product);
  }
  // @ts-ignore
  getbyID = (id: number) => {
    // tslint:disable-next-line:no-shadowed-variable
    return this.http.get<Products>(`${this.api}/${id}`);
  }
}
