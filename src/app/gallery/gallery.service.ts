import { Injectable } from "@angular/core";
import { IProduct } from "../models/interfaces";

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  products: Array<IProduct> = [
    {
      id: 1,
      category: "liquor",
      images: [
        "/assets/products/liquor/romanee_conti/romanee_conti_1.png",
        "/assets/products/liquor/romanee_conti/romanee_conti_2.png",
        "/assets/products/liquor/romanee_conti/romanee_conti_3.png",
        "/assets/products/liquor/romanee_conti/romanee_conti_4.png",
        "/assets/products/liquor/romanee_conti/romanee_conti_5.png"
      ],
      title: {
        firstPart: "Romanee",
        highlighted: "Conti"
      },
      galleryImages: {
        image_1: "/assets/products/liquor/romanee_conti/romanee_conti_1.png",
        image_2: "/assets/products/liquor/romanee_conti/romanee_conti_2.png",
        image_3: "/assets/products/liquor/romanee_conti/romanee_conti_3.png",
        image_4: "/assets/products/liquor/romanee_conti/romanee_conti_4.png",
        image_5: "/assets/products/liquor/romanee_conti/romanee_conti_5.png"
      },
      details: {
        title: {
          firstPart: "Romanee",
          highlighted: "Conti"
        }
      }
    },
    {
      id: 2,
      category: "liquor",
      images: [
        "/assets/products/liquor/mission_macallan/mission_macallan_1.png"
      ],
      title: {
        firstPart: "Mission",
        highlighted: "Macallan"
      },
      galleryImages: {
        image_1:
          "/assets/products/liquor/mission_macallan/mission_macallan_1.png"
      },
      details: {
        title: {
          firstPart: "Mission",
          highlighted: "Macallan"
        }
      }
    },
    {
      id: 3,
      category: "liquor",
      images: [
        "/assets/products/liquor/macallan_60_years/macallan_60_years_1.png"
      ],
      title: {
        firstPart: "Macallan",
        highlighted: "60 Years"
      },
      galleryImages: {
        image_1:
          "/assets/products/liquor/macallan_60_years/macallan_60_years_1.png"
      },
      details: {
        title: {
          firstPart: "Macallan",
          highlighted: "60 Years"
        }
      }
    },
    {
      id: 4,
      category: "liquor",
      images: [
        "/assets/products/liquor/macallan_25_years/macallan_25_years_1.png"
      ],
      title: {
        firstPart: "Macallan",
        highlighted: "25 Years"
      },
      galleryImages: {
        image_1:
          "/assets/products/liquor/macallan_25_years/macallan_25_years_1.png"
      },
      details: {
        title: {
          firstPart: "Macallan",
          highlighted: "25 Years"
        }
      }
    },
    {
      id: 5,
      category: "jewelry",
      images: [
        "/assets/products/jewelry/daytona_116500/daytona_116500_1.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_2.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_3.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_4.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_5.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_6.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_7.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_8.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_9.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_10.png",
        "/assets/products/jewelry/daytona_116500/daytona_116500_11.png"
      ],
      title: {
        firstPart: "Daytona",
        highlighted: "116500"
      },
      galleryImages: {
        image_1: "/assets/products/jewelry/daytona_116500/daytona_116500_1.png",
        image_2: "/assets/products/jewelry/daytona_116500/daytona_116500_2.png",
        image_3: "/assets/products/jewelry/daytona_116500/daytona_116500_3.png",
        image_4: "/assets/products/jewelry/daytona_116500/daytona_116500_4.png",
        image_5: "/assets/products/jewelry/daytona_116500/daytona_116500_5.png"
      },
      details: {
        title: {
          firstPart: "Daytona",
          highlighted: "116500"
        }
      }
    },
    {
      id: 6,
      category: "jewelry",
      images: [
        "/assets/products/jewelry/sideralis/sideralis_1.png",
        "/assets/products/jewelry/sideralis/sideralis_2.png"
      ],
      title: {
        firstPart: "Louis Money",
        highlighted: "Sideralis"
      },
      galleryImages: {
        image_1: "/assets/products/jewelry/sideralis/sideralis_1.png",
        image_2: "/assets/products/jewelry/sideralis/sideralis_2.png"
      },
      details: {
        title: {
          firstPart: "Louis Money",
          highlighted: "Sideralis"
        }
      }
    },
    {
      id: 7,
      category: "jewelry",
      images: [
        "/assets/products/jewelry/just_un_clou/just_un_clou_1.png",
        "/assets/products/jewelry/just_un_clou/just_un_clou_2.png",
        "/assets/products/jewelry/just_un_clou/just_un_clou_3.png",
        "/assets/products/jewelry/just_un_clou/just_un_clou_4.png",
        "/assets/products/jewelry/just_un_clou/just_un_clou_5.png"
      ],
      title: {
        firstPart: "Just un",
        highlighted: "Clou"
      },
      galleryImages: {
        image_1: "/assets/products/jewelry/just_un_clou/just_un_clou_1.png",
        image_2: "/assets/products/jewelry/just_un_clou/just_un_clou_2.png",
        image_3: "/assets/products/jewelry/just_un_clou/just_un_clou_3.png",
        image_4: "/assets/products/jewelry/just_un_clou/just_un_clou_4.png",
        image_5: "/assets/products/jewelry/just_un_clou/just_un_clou_5.png"
      },
      details: {
        title: {
          firstPart: "Just un",
          highlighted: "Clou"
        }
      }
    },
    {
      id: 8,
      category: "jewelry",
      images: [
        "/assets/products/jewelry/ecrou/ecrou_1.png",
        "/assets/products/jewelry/ecrou/ecrou_2.png",
        "/assets/products/jewelry/ecrou/ecrou_3.png",
        "/assets/products/jewelry/ecrou/ecrou_4.png",
        "/assets/products/jewelry/ecrou/ecrou_5.png",
        "/assets/products/jewelry/ecrou/ecrou_6.png"
      ],
      title: {
        highlighted: "Ecrou",
        secondPart: "Bracelets"
      },
      galleryImages: {
        image_1: "assets/products/jewelry/ecrou/ecrou_1.png",
        image_2: "assets/products/jewelry/ecrou/ecrou_2.png",
        image_3: "assets/products/jewelry/ecrou/ecrou_3.png",
        image_4: "assets/products/jewelry/ecrou/ecrou_4.png",
        image_5: "assets/products/jewelry/ecrou/ecrou_5.png"
      },
      details: {
        title: {
          highlighted: "Ecrou",
          secondPart: "Bracelets"
        }
      }
    }
  ];

  constructor() {}

  getProducts(category: string) {
    let result = this.products.filter(product => {
      if (product.category === category) {
        return product;
      }
    });
    return result;
  }

  getProduct(id: number) {
    let result = this.products.filter(product => {
      if (product.id === id) {
        return product;
      }
    });
    return result[0];
  }
}
