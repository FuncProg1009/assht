import { Component, OnInit } from '@angular/core';
import {Products} from '../../Product';
import {ServiceService} from '../../Service/service.service';

import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.data.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x.name;

  page = 1;
  pageSize = 4 ;
  data: Products[];
  // tslint:disable-next-line:variable-name
  private service: ServiceService;
  // tslint:disable-next-line:variable-name
  constructor(private _service: ServiceService) {
    this.service = _service;
  }

  ngOnInit(): void {
    this.getproduct();
  }
  getproduct(): void {
    this._service.getListProduct().subscribe(data => {
      this.data = data;
    });
  }
}
