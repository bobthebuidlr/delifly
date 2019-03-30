import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('showHide', [
      state(
        'hide',
        style({
          opacity: 0,
          height: 0,
          'line-height': 0
        })
      ),
      state(
        'show',
        style({
          opacity: 1,
          height: 80,
          'line-height': 1.25
        })
      ),
      transition('hide => show', animate('1000ms')),
      transition('show => hide', animate('1000ms'))
    ])
  ]
})
export class CategoryComponent implements OnInit {

  @Input() category: any;
  @Input() active = false;

  @Output() clickedCategory: EventEmitter<string> = new EventEmitter();

  activeCategory = 'liquor';

  constructor() { }

  ngOnInit() {
  }

  activateCategory() {
    this.clickedCategory.emit(this.category.name);
    this.active = !this.active;
  }

}
