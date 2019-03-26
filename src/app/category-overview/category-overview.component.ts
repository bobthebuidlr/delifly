import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent implements OnInit {

  categories = [
    { name: 'jewelry', title: 'Jewelry and Watches'},
    { name: 'liquor', title: 'Wines and Liquors'},
    { name: 'styling', title: 'Fashion and Styling'}
  ];

  activeCategory = 'liquor';

  constructor() { }

  ngOnInit() {
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

}
