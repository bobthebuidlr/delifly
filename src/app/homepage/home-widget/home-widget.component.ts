import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-home-widget',
  templateUrl: './home-widget.component.html',
  styleUrls: ['./home-widget.component.scss']
})
export class HomeWidgetComponent implements OnInit {

  @ViewChild('input') input: MatInput;

  PLACEHOLDER = 'FILL IN YOUR FLIGHT NUMBER';

  constructor() { }

  ngOnInit() {
  }

}
