import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() isEven: boolean;
  @Input() product;

  defaultDescription = 'Specially developed by the brand, Oystersteel belongs to the 904L steel family, alloys most commonly used in high-tech and in the aerospace and chemical industries where maximum resistance to corrosion is essential.'

  constructor(private router: Router) { }

  ngOnInit() {}

  openProductPage(id: number): void {
    this.router.navigate([`/product/${id}`]);
  }

}
