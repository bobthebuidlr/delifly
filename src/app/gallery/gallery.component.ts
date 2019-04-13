import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  products = [];

  constructor(private route: ActivatedRoute, private galleryService: GalleryService) {}

  ngOnInit() { 
    let category = this.route.snapshot.paramMap.get('category');
    this.products = this.galleryService.getProducts(category);
  }
}
