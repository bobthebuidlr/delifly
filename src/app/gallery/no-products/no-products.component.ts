import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-products',
  templateUrl: './no-products.component.html',
  styleUrls: ['./no-products.component.scss']
})
export class NoProductsComponent implements OnInit {

  buttonText = 'Inquire'
  headerText = 'Inquire about your Personal Styling Concierge now'

  constructor() { }

  ngOnInit() {
  }

}
