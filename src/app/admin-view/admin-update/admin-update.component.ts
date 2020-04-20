import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Products} from '../../Product';
import {ServiceService} from '../../Service/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
  edit: Products;
  private service: ServiceService;
  constructor(private _service: ServiceService, private activatedRoute: ActivatedRoute) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this._service.getbyID(id).subscribe(data => {
        this.edit = data;
      });
    });
  }
  Update(product: Products) {
    this._service.updateProduct(product).subscribe(value =>{
      console.log(value);
    });
  }
}
