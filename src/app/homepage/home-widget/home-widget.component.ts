import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-home-widget',
  templateUrl: './home-widget.component.html',
  styleUrls: ['./home-widget.component.scss'],
  animations: [
    trigger('showHide', [
      state(
        'hide',
        style({
          opacity: 0
        })
      ),
      state(
        'show',
        style({
          opacity: 1
        })
      ),
      transition('hide => show', animate('500ms')),
      transition('show => hide', animate('200ms'))
    ])
  ]
})
export class HomeWidgetComponent implements OnInit {

  isVisible = false;

  @ViewChild('input') input: MatInput;

  PLACEHOLDER = 'FILL IN YOUR FLIGHT NUMBER';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = !this.isVisible;
    }, 1000);
  }
}
