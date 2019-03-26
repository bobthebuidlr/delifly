import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: any;

  @Output() clickedCategory: EventEmitter<string> = new EventEmitter();

  activeCategory = 'liquor';

  constructor() { }

  ngOnInit() {
  }

  activateCategory() {
    this.clickedCategory.emit(this.category.name);
  }

}
