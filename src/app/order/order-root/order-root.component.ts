import { Component, OnInit } from '@angular/core';
import { OrderRow } from '../order-row.model';

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})

export class OrderRootComponent implements OnInit {
  manuelMod=false;
  rows=[
    new OrderRow("la nuit","rené",7,43),
    new OrderRow("la nuit 2","toto",7,43)
  ];

  constructor() { }
  ngOnInit() {
  }

  removeRow(row:OrderRow):void{
    this.rows=this.rows.filter(r =>r !==row);
  }
}
