import { Component, OnInit } from '@angular/core';
import {Products} from '../../Product';
import {ServiceService} from '../../Service/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  add: Products = new Products();
  private service: ServiceService;
  constructor(private _service: ServiceService) {
    this.service = _service;
  }

  ngOnInit(): void {
  }
  Insert(product: Products) {
    this._service.insertProduct(product).subscribe(value => { console.log('Sucsses'); } );
  }
}
