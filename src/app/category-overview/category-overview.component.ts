import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.component.html',
  styleUrls: ['./category-overview.component.scss']
})
export class CategoryOverviewComponent implements OnInit {


  categories = [
    { name: 'jewelry', title: 'Jewelry and Watches', description: 'Indulge yourself in pure luxury on your flight. Find your dream timepiece within our unique collection of some of the most exclusive watches around the world. Take the opportunity when it presents itself.'},
    { name: 'liquor', title: 'Wines and Liquors', description: 'We get it, you are a person that enjoys the fine things in life. That is why we have selected only the most prestigious and fine wines for you to order. In for something stronger? Only the most exclusive and well matured liquors make it to our store.'},
    { name: 'styling', title: 'Fashion and Styling', description: 'Travelling takes time, why not make the best of it? With our fashion and styling service, we make sure you always look at your best. Hairdresser? Done. Tailored suit? Done. Dry cleaning service? We have got you covered. Top it off with a special fashion present for your partner. We love to make everybody happy!'}
  ];

  activeCategory = '';
  constructor() { }

  ngOnInit() {
  }

  setActiveCategory(category): void {
    window.setTimeout(() => {
      this.activeCategory = category.name;
    }, 150);
  }
}
