import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Products} from '../../Product';
import {ServiceService} from '../../Service/service.service';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  page = 1;
  pageSize = 6 ;

  data: Products[];
  new: Products;
  private service: ServiceService;
  constructor(private _service: ServiceService, private router: Router) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(): void {
    this.service.getListProduct().subscribe(data => {
      this.data = data;
    });

  }
  deleteproduct(id): void {
    this._service.deleteProduct(id).subscribe(value => { this.getproduct(); }, error => { console.log(error); });
  }
  getid(id): void {
    this.router.navigate(['/update', id]);
  }
  detail(id): void {
    this.router.navigate(['/detail', id]);
  }
  add(): void {
    this.router.navigate(['/add']);
  }
}
