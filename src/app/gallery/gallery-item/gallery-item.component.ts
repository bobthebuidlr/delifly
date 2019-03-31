import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() isEven: boolean;
  @Input() categoryItem: Object;

  images = [
    '/assets/products/watches/1941_remontoire_constant.png',
    '/assets/products/watches/1948_bespoke_movement_remontoire.png'
  ];

  constructor() { }

  ngOnInit() { }

}
