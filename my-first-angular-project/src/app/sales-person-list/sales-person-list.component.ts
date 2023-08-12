import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kuma","anup.kuma@pmail.com", 4000),
    new SalesPerson("John", "Do","john.do@pmail.com", 5000),
    new SalesPerson("Claire", "Murphy","claire.murphy@pmail.com", 6000),
    new SalesPerson("May", "Strong","may.strong@pmail.com", 9000),
  ];


}
