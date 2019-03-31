import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  categoryItems = [
    {
      name: '1941 Remontoire Constant',
      type: 'Force RG',
      description:
        "The Grönefeld 1941 Remontoire features an eight seconds constant force mechanism, ensuring the force serving the balance wheel does not wane.",
        url: '/assets/products/watches/1941_remontoire_constant.png'
    },
    {
      name: '1948 Bespoke Movement Remontoire',
      type: 'GT',
      description: "The words ‘engine turned’ might suggest that a computer-aided machine is used to make the patterns, but nothing is further from the truth.",
      url: '/assets/products/watches/1948_bespoke_movement_remontoire.png'
    },
    {
      name: '1948 Bespoke Movement Remontoire',
      type: 'GT',
      description: "The words ‘engine turned’ might suggest that a computer-aided machine is used to make the patterns, but nothing is further from the truth.",
      url: '/assets/products/watches/1941_remontoire_constant.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
